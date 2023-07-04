gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDMandalaCoreObjects1= [];
gdjs.Untitled_32sceneCode.GDMandalaCoreObjects2= [];
gdjs.Untitled_32sceneCode.GDMandalaCoreObjects3= [];
gdjs.Untitled_32sceneCode.GDTimerObjects1= [];
gdjs.Untitled_32sceneCode.GDTimerObjects2= [];
gdjs.Untitled_32sceneCode.GDTimerObjects3= [];
gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects1= [];
gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects2= [];
gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects3= [];
gdjs.Untitled_32sceneCode.GDScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDScoreObjects3= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDMandala2Objects1= [];
gdjs.Untitled_32sceneCode.GDMandala2Objects2= [];
gdjs.Untitled_32sceneCode.GDMandala2Objects3= [];
gdjs.Untitled_32sceneCode.GDText2Objects1= [];
gdjs.Untitled_32sceneCode.GDText2Objects2= [];
gdjs.Untitled_32sceneCode.GDText2Objects3= [];
gdjs.Untitled_32sceneCode.GDText3Objects1= [];
gdjs.Untitled_32sceneCode.GDText3Objects2= [];
gdjs.Untitled_32sceneCode.GDText3Objects3= [];
gdjs.Untitled_32sceneCode.GDOverlayObjects1= [];
gdjs.Untitled_32sceneCode.GDOverlayObjects2= [];
gdjs.Untitled_32sceneCode.GDOverlayObjects3= [];
gdjs.Untitled_32sceneCode.GDMenuBGObjects1= [];
gdjs.Untitled_32sceneCode.GDMenuBGObjects2= [];
gdjs.Untitled_32sceneCode.GDMenuBGObjects3= [];
gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects1= [];
gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects2= [];
gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects3= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects3= [];
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDGreenButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDGreenButtonObjects3= [];
gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1= [];
gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects2= [];
gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects3= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getTouchY(runtimeScene, 1, "", 0) <= 1450;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)))));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDScoreObjects1[k] = gdjs.Untitled_32sceneCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDGreenButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Mandala2"), gdjs.Untitled_32sceneCode.GDMandala2Objects1);
/* Reuse gdjs.Untitled_32sceneCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(10);
}{runtimeScene.getGame().getVariables().getFromIndex(3).mul(1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i].SetLabelText(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMandala2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMandala2Objects1[i].hide(false);
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32sceneCode.GDGreenButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGreenButtonObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGreenButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGreenButtonObjects2[k] = gdjs.Untitled_32sceneCode.GDGreenButtonObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGreenButtonObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(10);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1[k] = gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDScoreObjects1[k] = gdjs.Untitled_32sceneCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1 */
gdjs.copyArray(runtimeScene.getObjects("RadianceParticles"), gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).mul(1.2);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)))));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).mul(1.1);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1[i].SetLabelText(gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects1[i].setFlow(gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects1[i].getFlow() + (1));
}
}}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mandala2"), gdjs.Untitled_32sceneCode.GDMandala2Objects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "MainTimer");
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Starchild (Extended).mp3", false, 50, 1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "MenuLayer");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMandala2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMandala2Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mandala2"), gdjs.Untitled_32sceneCode.GDMandala2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MandalaCore"), gdjs.Untitled_32sceneCode.GDMandalaCoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.Untitled_32sceneCode.GDTimerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTimerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "MainTimer")));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMandalaCoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMandalaCoreObjects1[i].rotate(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDMandala2Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDMandala2Objects1[i].rotate(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) * -(1), runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "MainTimer", 0.25, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Untitled_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 4);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.toString(Math.round((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDScoreObjects1[i].getVariables().getFromIndex(0))))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32sceneCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects1[k] = gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MenuLayer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1[k] = gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "MenuLayer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "MenuLayer");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDMandalaCoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMandalaCoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMandalaCoreObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTimerObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRadianceParticlesObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDScoreObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlackDecoratedButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMandala2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDMandala2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDMandala2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDText2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDText3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDText3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDText3Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDOverlayObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDOverlayObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDOverlayObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDMenuBGObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDMenuBGObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDMenuBGObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlueButtonWithShadowObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGreenButtonObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPurpleButtonWithShadowObjects3.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
