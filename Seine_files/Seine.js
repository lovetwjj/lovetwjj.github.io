// Created by iWeb 3.0.4 local-build-20160131

function createMediaStream_id4()
{return IWCreatePhotocast("http://love.metaarch.info/lovetwjj.github.io/Seine_files/rss.xml",true);}
function initializeMediaStream_id4()
{createMediaStream_id4().load('http://love.metaarch.info/lovetwjj.github.io',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id4',{pageIndex:0}));});}
function layoutMediaGrid_id4(range)
{createMediaStream_id4().load('http://love.metaarch.info/lovetwjj.github.io',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id4',new IWPhotoGridLayout(6,new IWSize(96,96),new IWSize(96,0),new IWSize(115,111),27,27,0,new IWSize(22,21)),new IWPhotoFrame([IWCreateImage('Seine_files/Rosewood_01.png'),IWCreateImage('Seine_files/Rosewood_02.png'),IWCreateImage('Seine_files/Rosewood_03.png'),IWCreateImage('Seine_files/Rosewood_06.png'),IWCreateImage('Seine_files/Rosewood_09.png'),IWCreateImage('Seine_files/Rosewood_08.png'),IWCreateImage('Seine_files/Rosewood_07.png'),IWCreateImage('Seine_files/Rosewood_04.png')],null,2,0.400000,0.000000,0.000000,0.000000,0.000000,26.000000,24.000000,26.000000,27.000000,79.000000,105.000000,79.000000,105.000000,null,null,null,0.400000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id4(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id4(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id4(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Seine_files/SeineMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');NotificationCenter.addObserver(null,relayoutMediaGrid_id4,'RangeChanged','id4')
adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');Widget.onload();initializeMediaStream_id4()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
