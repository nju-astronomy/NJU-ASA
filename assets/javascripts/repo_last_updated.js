(function () {
  var owner = "nju-astronomy";
  var repo = "NJU-ASA";

  function formatDate(isoString) {
    var date = new Date(isoString);
    if (Number.isNaN(date.getTime())) {
      return null;
    }

    var formatter = new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Shanghai"
    });

    return formatter.format(date) + " (UTC+8)";
  }

  function updateLastCommitTime() {
    var target = document.getElementById("repo-last-updated");
    if (!target) {
      return;
    }

    var api = "https://api.github.com/repos/" + owner + "/" + repo + "/commits?per_page=1";

    fetch(api, {
      headers: {
        Accept: "application/vnd.github+json"
      }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("GitHub API request failed: " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        var commitDate = data && data[0] && data[0].commit && data[0].commit.committer && data[0].commit.committer.date;
        var formatted = commitDate ? formatDate(commitDate) : null;
        target.textContent = formatted || "获取失败";
      })
      .catch(function () {
        target.textContent = "获取失败";
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateLastCommitTime);
  } else {
    updateLastCommitTime();
  }

  if (typeof window.document$ !== "undefined" && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(function () {
      updateLastCommitTime();
    });
  }
})();
