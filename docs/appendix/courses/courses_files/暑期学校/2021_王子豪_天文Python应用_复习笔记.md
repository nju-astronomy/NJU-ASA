### I. Python基础

​	**1. 数据类型**

Python中变量不需要声明；等号赋值

```python
### Booleans	True False

### Numbers		int float fraction complex
int(2.5)			# 取整数部分而非四舍五入
# 数值运算
11/2					# python3浮点除法
11//2					# 取整
11**2					# 计算幂
11%2					# 求余数
# 分数
import fractions
x=fractions.Fraction(1,3)
# 三角函数
import math
math.pi
math.sin(math.pi/2)
### Python不支持无限精度

### List
list1=['abcd',777,2.23,'john',70.2]
print(list1) 			# 输出完整列表
print(list1[0]) 	# 输出列表的第⼀个元素
print(list1[1:3]) # 输出第⼆个⾄第三个的元素
print(list1[2:]) 	# 输出从第三个开始⾄列表末尾的所有元素
# 添加元素
list1.apend(1)				# 在尾部添加一个新元素
list1.extend([])			# 在尾部添加一个列表
list1.insert(0,'0a')	# 在指定位置添加一个元素
# 检索列表
list.count(777)				# 返回某值出现次数
'john' in list1				# 是否在列表中
list1.index(777)			# 第一次出现位置
# 删除元素
del list1[1]					# 删除指定位置元素
list.remove('abcd')		# 删除某值第一次出现元素
list.pop()						# 删除最后一个
list.pop(2)						# 删除指定位置元素

### Tuples：元组，相当于只读列表，操作与列表相同
v=('a',2,True)
(x,y,z)=v
(a, b, c) = range(3)	# 构造一个整数序列（0，1，2）

### Sets：集合，唯一值、无序集合
set1={'abcd',789,2.23,'john',70.2}
list1=['abcd',789,2.23,'john',70.2]
# 基本操作
a_set=set(list1)			# 从list1中构造集合a_set
set1=set()
set2={}
# 修改集合
set1.add(4)
set1.update({2,10,20})		# 增加一个或多个集合或列表
set1.discard(789)					# 删除该单指
set1.remove(70.2)					# 同上
set1.clear()							# 清空
# 集合运算
set1 = {1, 3, 6, 10, 15, 21, 28, 36, 45}
set2 = {1, 2, 3, 5, 6, 8, 9, 12, 18,45}
set1.union(set2) 					# 并
set1.intersection(set2) 	# 交
set1.difference(set2) 		# 差，1有2无的元素
set1.symmetric_difference(set2) # 1,2为全集的交补

### Dictionaries：字典，键值对
dict1={'name':'john','code':6666,'dept':'sales'}
### Strings：字符串
str1='Hello World!'
```

​	**2. 运算符号**

算术表达式

```python
a,b=10,20

```

​	**3. 控制语句**

```python
# if条件语句
num = 5
if num == 3:
  print('boss')
elif num == 2:
  print('user')
elif num == 1:
  print('worker')
elif num < 0:
  print('error')
else:
  print('roadman')
  
# while循环语句
a, b = 0, 10
while a<b:
  print(a)
  a = a + 1

# for循环语句
sum = 0
for x in [1,2,3,4]:
  sum = sum + x
  print(sum)
sum
fruits = ['banana', 'apple', 'mango']
for index in range(len(fruits)):
  print('Current fruit :', fruits[index])
  
for index in range(len(L)):
  print('Hello,',L[index],'!')
```

​	**4. 正则表达式**

正则表达式是一个特殊的字符序列，它能帮助你方便的检查一个字符串是否与某种模式匹配。

```Python
import re
re.match(pattern,string,flags=0)
re.match(pattern,string,flags=0)
# pattern：匹配的正则表达式；string：要匹配的字符串；flags：控制
# 匹配实例
import re
line="Cats are smarter than dogs"
matchObj = re.match( r'dogs', line, re.M|re.I)
if matchObj:
 print("match --> matchObj.group() : ",matchObj.group())
else:
 print("No match!!")
matchObj = re.search( r'dogs', line, re.M|re.I)
if matchObj:
 print("search --> matchObj.group() : ",matchObj.group())
else:
 print("No match!!")

# 改动实例：把老街道地址导入新系统
s='100 NORTH MAIN ROAD'
s.replace('ROAD','RD.')
# 等价于：
import re
re.sub('ROAD$','RD.',s)
```

​	**5. python中定义函数**

```python
### 基本格式
def functionname(parameters):
  function_suite
  return
### 函数定义
def printme(str):
  print(str)
  return
def printinfo( arg1, *vartuple):
 print("输出： ")
 print(arg1)
 for var in vartuple:
		print(var)
 return
```



### II. 天文模块

天文方面利用Python进行数据处理可大致分为两类：

1. 图像处理：测出目标源总光子数
2. 光谱分析：得到精确的谱能量分布

*例如：以光学波段为例，raw数据帧减去本底、暗流，做平常改正*

**1. numpy**

数学包：更加丰富的数学类型；数组表达和运算

```python
import numpy as np
```

数组基本运算

```python
### 构建一个二维数组
ab = np.array(
  	(
    	(1,2,4),				###第一行
    	(8,16,32),			###第二行
  	)
  dtype=np.int32			###定义数据类型
)
### 特殊数组
np.zeros(6)			###零数组
np.ones(6)			###一数组
np.ones_like(ab)					###维度与ab数组一致
np.arange(3,124,8)			###等差数列（ 初始，终止，间隔 ）
np.linspace(4,124,8)			###等差数列（ 初始，终止，n-1等分 ）

### 数组统计描述
np.sum(ab,axis=0)
### 其他统计值 sum, min, max, mean, median,

### 对象操作
ab,np.rot90(ab)			###旋转90度

### 结构体数组
sp = np.empty((10,),dtype=[('Wave',float),('Flux',float)])	###10个（wave，flux）坐标
sp['Wave']				###访问‘wave’行
sp[3]				###访问第三行
```

曲线拟合

```python
np.polyfit
```

更多功能：numpy官网

**2. scipy**

科学计算包（一般只引用子包）

```python
from scipy import fft
import scipy.fft
```

**3. matplotlib**

绘图包

```python
import matplotlib.pylot as plt
%matplotlib inline
```

绘图过程（对简单图形

```python
x=np.arange(-10,10,0.001)
y=np.sin[x]
plt.plot(x,y)
plt.xlim(6,-4)
plt.show()
plt.savefig("aa.png")
```

或（对复杂图形）

```python
fig,ax = plt.subplot(1, 1, figsize=(12,8))
ax.plot(x, y, "r:")
ax.set_xlim(6,-4)
ax.set_ylabel("sin($F_X$)")
```

同时画图：

```python
fig,(ax1,ax2,ax3) = plt.subplots(1, 3, figsize=(12,8))
ax1.plot(x, y, "r:")
ax2.plot(x, y, "b*")
ax3.plot(x, y, "g--")
# colour: w b r g m y c k
# lineshape: - -- :
# markers: * . o , ^ v < > + x s
```

```python
fig = plt.figure(12,5)
ax1 = fig.add_subplot(131)			###一幅图被分为一行三列，此为第一个
ax2 = fig.add_subplot(132)
ax3 = fig.add_subplot(133)
ax1.plot(x, y, "g+")
ax2.plot(x, y, "r:")
ax3.plot(x, y, "b*")
# 参考网站：astroplotlib.stsci.edu
```

**4. Pandas**

数据处理包

```python
import pandas as pd
import math
import numpy as np
```

数据读取与处理：

```python
df = pd.read_csv('data/hip.csv',sep='|')
df
df.plot.scatter(x='RA', y='Dec', color='DarkBlue')
df['RAh'] = df['RA']/ 15
```



### III. Python实例：系外行星监测数据处理与测光

Data Reduction Steps

- Combining bias and flats
- Correction of bias and flats
- Image alignment  *图像校准*
- Source detection and Photometry
- Differential photometry

I. 导入fits文件，确认header与图片信息

```python
from astropy.io import fits
from matplotlib import pyplot as plt
import numpy as np
head=fits.getheader('.')			###文件地址
data=fits.getdata('.')			###文件地址
print(head)

f,axs=plt.subplots(1,2,figsize=(16,8))
axs[0].imshow(data,vmin=300,vmax=600,origin='lower')
axs[0].set_title("north down, east left")
axs[1].imshow(np.flipud(data),vmin=300,vmax=600,origin='lower')
axs[1].set_title("north up, east left")
```

II. 合成bias，获得super-bias

```python
# 读取bias图像
import glob				###好像是一类目录文件搜索包
bfiles=glob.glob('.')			###文件地址
bfiles.sort()
allbias=[]
print("combining bias ...")

# 合并
for i,ifile in enumerate(bfiles):
  print("reading bias:",i+1,len(bfiles),ifiles)
  data=fits.getdata(ifile)
  allbias.append(data)
allbias=np.stack(allbias)			###化二维为三位，再沿着序列轴合并
print(allbias.shape)
superbias=np.median(allbias,axis=0)			###为什么是中值？
fits.writeto('.',superbias.astype('float32'),overwrite=True) ###这一步 不太懂在干什么

# 展示
plt.figure(figsize=(8,8))
plt.imshow(superbias,vmin=5,vmax=5,origin='lower')
plt,colorbar()
plt.title("super bias deriver from bias frame")
```

<img src="/Users/makkonem/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e66b4c65c6691729b7c3fa6ac5a3408e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/1831688115256_.pic.jpg" alt="1831688115256_.pic" style="zoom:70%;" />

III. 合成dome flats

```python
# 读取flats图像
ffiles=glob.glob('.')			###文件地址
ffiles.sort()
allflat=[]
print("combining dome flats ...")

# 合并
for i,ifile in enumerate(ffiles):
  print("reading flat:",i+1,len(ffiles),ifiles)
  data=fits.getdata(ifile)-superbias
  mflat=np.median(data[1500-256:1500+256,1500-256:1500+256])
  ###不知道在干什么
  data/=mflat
  print("median flat:",mflat)
  allflat.append(data)
allflat=np.stack(allflat)			###化二维为三位，再沿着序列轴合并
print(allflat.shape)
domeflat=np.median(allflat,axis=0)
fits.writeto('.',domeflat.astype('float32'),overwrite=True) 

# 展示
plt.figure(figsize=(8,8))
plt.imshow(domeflat,origin='lower')
plt,colorbar()
plt.title("dome flat deriver from dome flats")
```

<img src="/Users/makkonem/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e66b4c65c6691729b7c3fa6ac5a3408e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/1821688115189_.pic.jpg" alt="1821688115189_.pic" style="zoom:50%;" />

IV. gain and readout noise

```python
# calculate
from astropy..stats import sigma_clipped_stats
biasfile1='.'
biasfile2='.'
flatfile1='.'
flatfile2='.'
bias1=fits.getdata(biasfile1)[1500-256:1500+256,1500-256:1500+256]
bias2=fits.getdata(biasfile2)[1500-256:1500+256,1500-256:1500+256]
flat1=fits.getdata(flatfile1)[1500-256:1500+256,1500-256:1500+256]
flat2=fits.getdata(flatfile2)[1500-256:1500+256,1500-256:1500+256]
mean_bias1=np.median(bias1)
mean_bias2=np.median(bias2)
mean_flat1=np.median(flat1)
mean_flat2=np.median(flat2)

-,-,std_biasdiff=sigma_clipped_stats(bias1-bias2,sigma=4.0,maxiters=2)
-,-,std_flatdiff=sigma_clipped_stats(flat1-flat2,sigma=4.0,maxiters=2)
print(mean-bias1,mean_bias2,mean_flat1,std_biasdiff,std_flatdiff)
gain=((mean_flat1+mean_flat2)-(mean_bias1+mean_bias2)/(std_flatdiff**2-std_biasdiff**2))
rdnoise=gain*std_biasdiff/np.sqrt(2)
print("gain:",gain,"readout noise:",rdnoise)
```

V. 减去本底与平场，翻转图片

```python
# 添加keywords
from astropy.coordinates import SkyCoord
import astropy.unit as u
import glob,os

c=SkyCoord(".",".",frame='icrs',unit=(u.hourangle,u.degree))	###填入赤经，赤纬
ra=c.ra.degree;dec=c.dec.degree
print("ra:",ra,"dec:",e.dec.degree)
epoch=2000.0
pixscale=0.137

outdir='.'
sfiles=glob.glob(.)
sfiles.sort()
for i,ifile in enumerate(sfiles):
  print("reducing (debias, flat-fielding, and flipping):")
  indir,infile=os.path.split(ifile)
  rootname,-=os.path.splitext(infile)
  col_origin=head['CRVAL1']
  row_origin=head['CRVAL2']
  subflat=domeflat[row_origin:row_origin+512,col_origin:col_origin+512]
  subbias=superbias[row_origin:row_origin+512,col_origin:col_origin+512]
  if i==0:
    fits.writeto('.',subflat.astype('float32'),overwrite=True)
    fits.writeto('.',subbias.astype('float32'),overwrite=True)    
data=fits.getdata(ifile)

# 减去bias和flat-fielding
data=(data-subbias)/subflat

# 设置初始参考点 if doing astrometry
head['epoch']=2000.0
head['CRVAL1']=ra
head['CRVAL2']=dec
head['CRPIX1']=head['NAXIS1']/2.0
head['CRPIX2']=head['NAXIS2']/2.0
head['CDELT1']=-pixscale/3600.0
head['CDELT2']=pixscale/3600.0
head['CTYPE1']='RA---TAN'
head['CTYPE2']='DEC--TAN'
head['GAIN']=(gain,'GAIN in e-/ADU')
head['RDNOISE']=(rdnoise,'readout noise in electron')
print("writing to"+outfile)
fits.wirteto(outfile,np.flipud(data),header=head,overwrite=True,output_verify='silentfix')
```



An example for source detection and photometry

I. Get sky mask

```python
import photutils as pht
data=fits.getdata('.')
# 了解关于天域的统计数据
mean,median,std=sigma_clipped_stats(data,sigma=3.0)			###sigma是什么？
print((mean,median,std))

f,axs=plt.subplot(1,2,figsize=(16,8))
axs[0].imshow(data,vmin=300,vmax=600,origin='lower')
axs[0].set_title("data")
axs[1].imshow(mask,origin='lower')
axs[1].set_title("mask")

# 获得2D sky map
from astropy.stats import SigmaClip
sigma_clip = SigmaClip(sigma=3.)
bkg_estimator = pht.SExtractorBackground()
bkg=pht.Background2D(data,(64,64),mask=mask,filter_size=(3,3),sigma_clip=sigma_clip,bkg_estimator=bkg_estimator)
print(bkg.background_median,bkg.background_rms_median)

f,axs=plt.subplot(1,2,figsize=(16,8))
axs[0].imshow(bkg.background,origin='lower')
axs[0].set_title("background")
axs[1].imshow(bkg.bakcground_rms,origin='lower')
axs[1].set_title("background rms")
```

<img src="/Users/makkonem/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e66b4c65c6691729b7c3fa6ac5a3408e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/1781688103396_.pic.jpg" alt="1781688103396_.pic" style="zoom:50%;" />

II. Source detection

```python
# find objects and calculate basic information
daofind = pht.IRAFStarFinder(fwhm=3.0, threshold=5.*bkg.background_rms_median,exclude_border=True,sharplo=0.5,sharphi=2.0,roundlo=0.0,roundhi=0.7)
sources=daofind(data-bkg.background_median)
print(sources)
print(sources.colnames)

from photutils import CircularAperture
positions=np.transpose((sources['xcentroid'],sources['ycentroid']))
apertures=CircularAperture(positions,r=10.)
plt.figure(figsize=(8,8))
plt.imshow(data,cmap='Greys_r',origin='lower',vmin=300,vmax=600,interpolation='nearest')
apertures.plot(color='red',lw=1.5,alpha=0.5)
```

<img src="/Users/makkonem/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e66b4c65c6691729b7c3fa6ac5a3408e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/1791688112991_.pic.jpg" alt="1791688112991_.pic" style="zoom:50%;" />

III. Error estimation

```python
from photutils.unit import calc_total_error
error=calc_total_error(data_bkg.background,bkg.banckground_rms,gain)
print(np.median(error))
```

IV. Aperture photometry

```python
# 孔径测光
from astropy.table import Table
from astropy.table import table
radii=[3,4,5,6,8,10,12,15,20,25]			###孔径半价
positions=(ix,iy) for ix,iy in zip(sources['xcentroid'],sources['ycentroid'])
apertures=[pht.CircularAperture(positions,r=r) for r in radii]
aper_phot=pht.aperture_photometry(data-bkg.background,apertures,error=error)
print(aper_phot.colnames)

# 将流量换算为星等（25等星为零点）
for i in range(len(radii)):
  fcol='aperture_sum_'+str(i)
  ecol='aperture_sum_err_'+str(i)
  flux=aper_phot[fcol]
  fluxerr=aper_phot[ecol]
  mag=-2.5*np.log10(lux)+25
  magerr=2.5/(flux*np.log(10))*fluxerr
  aper_phot[fcol]=mag
  aper_phot[ecol]=magerr
  aper_phot.rename_column(fcol,'mag_'+str(i))
  aper_phot.rename_column(ecol,'magerr_'+str(i))
```

V. Display

```python
f,axs=plt.subplot(1,2,figsize=(16,8))
data1=fits.getdata('.')
data2=fits.getdata('.')
axs[0].imshow(data1,vmin=300,vmax=600,origin='lower')
axs[0].set_title("image 1")
axs[1].imshow(data2,vmin=300,vmax=600,origin='lower')
axs[1].set_title("image 2")
```

<img src="/Users/makkonem/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e66b4c65c6691729b7c3fa6ac5a3408e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/1801688114298_.pic.jpg" alt="1801688114298_.pic" style="zoom:50%;" />

VI. Calculate average shifts between two different images

```python
cat1=Table.read('.')
cat2=Table.read('.')
x1=cat1['xcenter']
y1=cat1['ycenter']
x2=cat2['xcenter']
y2=cat2['ycenter']
ncat1=len(cat1)
ncat2=len(cat2)
XX=[]
YY=[]
for i in range(ncat2):
  XX.extend((x1-x2[i]))
  YY.extend((y1-y2[i]))
XX=np.array(XX)
YY=np.array(YY)
xhist,xbins=np.histogram(XX,range=[-200,200],bins=401)
yhist,ybins=np.histogram(YY,range=[-200,200],bins=401)				###bin选取有一定技巧
print(np.median(xhist),np.median(yhist))
f,axs=plt.subplot(1,2,figsize=(16,8))
axs[0].hist(XX,range=[-200,200],bins=401)
axs[0].set_title("x shift")
axs[1].hist(YY,range=[-200,200],bins=401)
axs[1].set_title("y shift")
```

<img src="/Users/makkonem/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e66b4c65c6691729b7c3fa6ac5a3408e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/1811688114922_.pic.jpg" alt="1811688114922_.pic" style="zoom:50%;" />

……



### IV. AstroPy基本使用

1. 天文数据类型

   FITS文件：普适图像传输系统

   结构：HDU（header and data unit）

   头结构（header）：包含多个关键字即信息

   第一行：SIMPLE=T

   第二行：每一个像元用多少字节表示	BITPIX

   第三行：数据轴（n个轴）	NAXIS

   第四行：NAXISn

   $N_{bits}=|BITPIX|\times(NAXIS_1\times...\times NAXIS_n)$

   *例如*

   <img src="/Users/makkonem/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e66b4c65c6691729b7c3fa6ac5a3408e/Message/MessageTemp/c196266f837d14e0b693f961bee37b66/Image/21689237153_.pic.jpg" alt="21689237153_.pic" style="zoom:50%;" />

   *2维，每个轴14400个pixel，每个pixel占16bits*

   *时间格式：CCYY-MM-DD[Thh:mm:ss]*

   

   **关键字总结：**

   <img src="/Users/makkonem/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/e66b4c65c6691729b7c3fa6ac5a3408e/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/2031689237903_.pic.jpg" alt="2031689237903_.pic" style="zoom:50%;" />

   

2. AstroPy的实际操作

   一些基本功能：

```python
### 功能一：导入物理常量
from astropy import constants as const
help(const)			# 查询可提供的物理常量
print(const.c)
print(const.c.to('km/s'))

### 功能二：单位转换
from astropy import units as u
F = (const.G * 3. * const.M_sun * 100 * u.kg) / (2.2 * u.au) ** 2
print(F.to(u.N))			# 一个数字乘以一个单位

yellow = 580 * u.nm
yellow.to(u.terahertz,quivalencies=u.spectral())


### 功能三：NDData & Table 多维数据与表格处理
from astropy.nddata import NDData
from astropy.nddata import CCDData
import numpy as np
from matplotlib import pyplot as plt

x=CCDData([[1,2,3][4,5,6]],unit='adu')
np.asarray(x)
plt.imshow(x)

### 功能四：时间转化
from astropy.time import Time
times = ['2020-01-01T00:00:00.123456789','2021-01-01T00:00:00']
t = Time(times,format='isot',scale='utc')			# 转译时间信息
t2 = Times(now)
t2.jd				# 儒略历
t2.mjd			# 约化儒略历
t2.fits			# 转化为fits文件可以储存的形式
t2.ymdhms		# 拆分为元组

### 功能五：天文空间坐标系
from astropy import units as u
from astropy.coordinates import SkyCoord
from astropy.coordinates import EarthLocation
from astropy.coordinates import AltAz

# 织女星坐标，坐标格式可自己定义
c = SkyCoord('18 36 56.19 +38 46 58.8',unit=(u.hourangle,u.deg))
c.ra
c.dec
c.ra.hms
c.dec.dms
c.ra.deg
c.ra.radian

# 国台地球坐标，接下来进行地平坐标系到赤道坐标系的转化
d = EarthLocation(lat='40d23m45.36s',lon='',height=900*u.m)
observing_time = Times('2021-01-01T00:00:00',format='isot',scale='utc')
aa=AltAz(location=d,obstime=observing_time)
print(aa)
c.transform_to(aa)			# 输出观测时应该观测的位置（地平坐标系）
```

​		关于Fits文件的功能：

```python
from astropy.io import fits
# 读取头文件
header = fits.getheader('data/hip.fits',1)
# 读取信息
data = fits.getdata('data/hip.fits',1)

# 显示图像
hdu_list = fits.open(image_file)
hdu_list.info()
image_data=hdu_list[0].data
hdu_list.close
plt.imshow(image_data,cmap='gray')
plt.colorbar 
```

 

### V. 机器学习Python实践

1. 机器学习Python库

   a. Scikit-Learn	

   <https://scikit-learn.org/stable/> 

   <https://github.com/scikit-learn/scikit-learn>

   b. AstroML

   <https://www.astroml.org/index.html>

   <https://github.com/astroML/astroML>

   

2. (监督）机器学习流程

   数据准备、特征工程、创建模型、模型训练、模型评估、模型部署

   

3. 数据准备

   数据预处理：处理缺失值、特征缩放、特征编码

   数据集划分：区分训练集与测试集

   

### 实操：

```python
# astropy测光实验
from astropy.io import fits
from astropy.nddata import CCDData
from astropy.stats import sigma_clip
import numpy as np
import glob
import matplotlib.pyplot as plt

# generate super-bias
bfiles = glob.glob('/Users/makkonem/Desktop/Innovation_project/Test/R16250*.fits')
bfiles.sort()
allbias=[]
print("combining bias ...")

for i,ifile in enumerate(bfiles):
  print("reading bias:",i+1,len(bfiles),ifile)
  data=fits.getdata(ifile)
  allbias.append(data)
allbias=np.stack(allbias)
print(allbias.shape)

superbias=np.mean(allbias,axis=0)
fits.writeto('superbias.fit',superbias.astype('float32'),overwrite=True)

plt.figure(figsize=(8,8))
plt.imshow(superbias,vmin=5,vmax=5,origin='lower')
plt.colorbar()
plt.title("super bias deriver from bias frame")
```

