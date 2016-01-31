// Created by iWeb 3.0.4 local-build-20160131

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(-1.4863,1.3383),color:'#000000',opacity:0.500000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('huan_ying_files/huan_yingMoz.css')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
