gdjs.MainLandSceneCode = {};
gdjs.MainLandSceneCode.localVariables = [];
gdjs.MainLandSceneCode.idToCallbackMap = new Map();
gdjs.MainLandSceneCode.GDBackgroundObjects1= [];
gdjs.MainLandSceneCode.GDBackgroundObjects2= [];
gdjs.MainLandSceneCode.GDPlayerObjects1= [];
gdjs.MainLandSceneCode.GDPlayerObjects2= [];
gdjs.MainLandSceneCode.GDSolidColliderObjects1= [];
gdjs.MainLandSceneCode.GDSolidColliderObjects2= [];
gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1= [];
gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects2= [];
gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1= [];
gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects2= [];
gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1= [];
gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects2= [];
gdjs.MainLandSceneCode.GDNoticeBoardBackgrundObjects1= [];
gdjs.MainLandSceneCode.GDNoticeBoardBackgrundObjects2= [];
gdjs.MainLandSceneCode.GDHint_9595DoorObjects1= [];
gdjs.MainLandSceneCode.GDHint_9595DoorObjects2= [];
gdjs.MainLandSceneCode.GDHint_9595BoardObjects1= [];
gdjs.MainLandSceneCode.GDHint_9595BoardObjects2= [];
gdjs.MainLandSceneCode.GDHint_9595ForestObjects1= [];
gdjs.MainLandSceneCode.GDHint_9595ForestObjects2= [];
gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1= [];
gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects2= [];
gdjs.MainLandSceneCode.GDBtn_9595CompleteObjects1= [];
gdjs.MainLandSceneCode.GDBtn_9595CompleteObjects2= [];
gdjs.MainLandSceneCode.GDInput_9595NewTaskObjects1= [];
gdjs.MainLandSceneCode.GDInput_9595NewTaskObjects2= [];
gdjs.MainLandSceneCode.GDBtn_9595AddObjects1= [];
gdjs.MainLandSceneCode.GDBtn_9595AddObjects2= [];
gdjs.MainLandSceneCode.GDText_9595TaskNewObjects1= [];
gdjs.MainLandSceneCode.GDText_9595TaskNewObjects2= [];
gdjs.MainLandSceneCode.GDBtn_9595ShowObjects1= [];
gdjs.MainLandSceneCode.GDBtn_9595ShowObjects2= [];
gdjs.MainLandSceneCode.GDBtn_9595DeleteObjects1= [];
gdjs.MainLandSceneCode.GDBtn_9595DeleteObjects2= [];
gdjs.MainLandSceneCode.GDText_9595Task1Objects1= [];
gdjs.MainLandSceneCode.GDText_9595Task1Objects2= [];
gdjs.MainLandSceneCode.GDText_9595Task2Objects1= [];
gdjs.MainLandSceneCode.GDText_9595Task2Objects2= [];
gdjs.MainLandSceneCode.GDText_9595Task3Objects1= [];
gdjs.MainLandSceneCode.GDText_9595Task3Objects2= [];
gdjs.MainLandSceneCode.GDText_9595Task4Objects1= [];
gdjs.MainLandSceneCode.GDText_9595Task4Objects2= [];
gdjs.MainLandSceneCode.GDText_9595Task5Objects1= [];
gdjs.MainLandSceneCode.GDText_9595Task5Objects2= [];
gdjs.MainLandSceneCode.GDText_9595Task6Objects1= [];
gdjs.MainLandSceneCode.GDText_9595Task6Objects2= [];
gdjs.MainLandSceneCode.GDNewSpriteObjects1= [];
gdjs.MainLandSceneCode.GDNewSpriteObjects2= [];
gdjs.MainLandSceneCode.GDNewTextObjects1= [];
gdjs.MainLandSceneCode.GDNewTextObjects2= [];
gdjs.MainLandSceneCode.GDCloseForestObjects1= [];
gdjs.MainLandSceneCode.GDCloseForestObjects2= [];


gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDSolidColliderObjects1Objects = Hashtable.newFrom({"SolidCollider": gdjs.MainLandSceneCode.GDSolidColliderObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595DoorObjects1Objects = Hashtable.newFrom({"Trigger_Door": gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595DoorObjects1Objects = Hashtable.newFrom({"Trigger_Door": gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595GoalBoardObjects1Objects = Hashtable.newFrom({"Trigger_GoalBoard": gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595GoalBoardObjects1Objects = Hashtable.newFrom({"Trigger_GoalBoard": gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595ForestObjects1Objects = Hashtable.newFrom({"Trigger_Forest": gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595ForestObjects1Objects = Hashtable.newFrom({"Trigger_Forest": gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595DoorObjects1Objects = Hashtable.newFrom({"Trigger_Door": gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595GoalBoardObjects1Objects = Hashtable.newFrom({"Trigger_GoalBoard": gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.MainLandSceneCode.GDPlayerObjects1});
gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595ForestObjects1Objects = Hashtable.newFrom({"Trigger_Forest": gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1});
gdjs.MainLandSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hint_Board"), gdjs.MainLandSceneCode.GDHint_9595BoardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hint_Door"), gdjs.MainLandSceneCode.GDHint_9595DoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hint_Forest"), gdjs.MainLandSceneCode.GDHint_9595ForestObjects1);
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595DoorObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595DoorObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595BoardObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595BoardObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595ForestObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595ForestObjects1[i].hide();
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "NoticeBoardUI");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ForestUI");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainLandSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.MainLandSceneCode.GDPlayerObjects1[k] = gdjs.MainLandSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainLandSceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainLandSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainLandSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walking Left");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainLandSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.MainLandSceneCode.GDPlayerObjects1[k] = gdjs.MainLandSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainLandSceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainLandSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainLandSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walking Right");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainLandSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isUsingControl("Up") ) {
        isConditionTrue_0 = true;
        gdjs.MainLandSceneCode.GDPlayerObjects1[k] = gdjs.MainLandSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainLandSceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainLandSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainLandSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walking Up");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainLandSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isUsingControl("Down") ) {
        isConditionTrue_0 = true;
        gdjs.MainLandSceneCode.GDPlayerObjects1[k] = gdjs.MainLandSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainLandSceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainLandSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainLandSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walking Down");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainLandSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.MainLandSceneCode.GDPlayerObjects1[k] = gdjs.MainLandSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.MainLandSceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainLandSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.MainLandSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Standing Still");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SolidCollider"), gdjs.MainLandSceneCode.GDSolidColliderObjects1);
{for(var i = 0, len = gdjs.MainLandSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDSolidColliderObjects1Objects, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_Door"), gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595DoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hint_Door"), gdjs.MainLandSceneCode.GDHint_9595DoorObjects1);
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595DoorObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595DoorObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_Door"), gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595DoorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hint_Door"), gdjs.MainLandSceneCode.GDHint_9595DoorObjects1);
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595DoorObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595DoorObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_GoalBoard"), gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595GoalBoardObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hint_Board"), gdjs.MainLandSceneCode.GDHint_9595BoardObjects1);
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595BoardObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595BoardObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_GoalBoard"), gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595GoalBoardObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hint_Board"), gdjs.MainLandSceneCode.GDHint_9595BoardObjects1);
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595BoardObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595BoardObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_Forest"), gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595ForestObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hint_Forest"), gdjs.MainLandSceneCode.GDHint_9595ForestObjects1);
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595ForestObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595ForestObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_Forest"), gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595ForestObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Hint_Forest"), gdjs.MainLandSceneCode.GDHint_9595ForestObjects1);
{for(var i = 0, len = gdjs.MainLandSceneCode.GDHint_9595ForestObjects1.length ;i < len;++i) {
    gdjs.MainLandSceneCode.GDHint_9595ForestObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_Door"), gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595DoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18292140);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HomeInteriorScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_GoalBoard"), gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595GoalBoardObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18294860);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "NoticeBoardUI");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.MainLandSceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Trigger_Forest"), gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDPlayerObjects1Objects, gdjs.MainLandSceneCode.mapOfGDgdjs_9546MainLandSceneCode_9546GDTrigger_95959595ForestObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18297012);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "ForestUI");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn_CloseBoard"), gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1.length;i<l;++i) {
    if ( gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1[k] = gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1[i];
        ++k;
    }
}
gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "NoticeBoardUI");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CloseForest"), gdjs.MainLandSceneCode.GDCloseForestObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainLandSceneCode.GDCloseForestObjects1.length;i<l;++i) {
    if ( gdjs.MainLandSceneCode.GDCloseForestObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MainLandSceneCode.GDCloseForestObjects1[k] = gdjs.MainLandSceneCode.GDCloseForestObjects1[i];
        ++k;
    }
}
gdjs.MainLandSceneCode.GDCloseForestObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ForestUI");
}
}

}


};

gdjs.MainLandSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainLandSceneCode.GDBackgroundObjects1.length = 0;
gdjs.MainLandSceneCode.GDBackgroundObjects2.length = 0;
gdjs.MainLandSceneCode.GDPlayerObjects1.length = 0;
gdjs.MainLandSceneCode.GDPlayerObjects2.length = 0;
gdjs.MainLandSceneCode.GDSolidColliderObjects1.length = 0;
gdjs.MainLandSceneCode.GDSolidColliderObjects2.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects2.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects2.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects2.length = 0;
gdjs.MainLandSceneCode.GDNoticeBoardBackgrundObjects1.length = 0;
gdjs.MainLandSceneCode.GDNoticeBoardBackgrundObjects2.length = 0;
gdjs.MainLandSceneCode.GDHint_9595DoorObjects1.length = 0;
gdjs.MainLandSceneCode.GDHint_9595DoorObjects2.length = 0;
gdjs.MainLandSceneCode.GDHint_9595BoardObjects1.length = 0;
gdjs.MainLandSceneCode.GDHint_9595BoardObjects2.length = 0;
gdjs.MainLandSceneCode.GDHint_9595ForestObjects1.length = 0;
gdjs.MainLandSceneCode.GDHint_9595ForestObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595CompleteObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595CompleteObjects2.length = 0;
gdjs.MainLandSceneCode.GDInput_9595NewTaskObjects1.length = 0;
gdjs.MainLandSceneCode.GDInput_9595NewTaskObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595AddObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595AddObjects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595TaskNewObjects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595TaskNewObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595ShowObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595ShowObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595DeleteObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595DeleteObjects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task1Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task1Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task2Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task2Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task3Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task3Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task4Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task4Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task5Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task5Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task6Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task6Objects2.length = 0;
gdjs.MainLandSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.MainLandSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.MainLandSceneCode.GDNewTextObjects1.length = 0;
gdjs.MainLandSceneCode.GDNewTextObjects2.length = 0;
gdjs.MainLandSceneCode.GDCloseForestObjects1.length = 0;
gdjs.MainLandSceneCode.GDCloseForestObjects2.length = 0;

gdjs.MainLandSceneCode.eventsList0(runtimeScene);
gdjs.MainLandSceneCode.GDBackgroundObjects1.length = 0;
gdjs.MainLandSceneCode.GDBackgroundObjects2.length = 0;
gdjs.MainLandSceneCode.GDPlayerObjects1.length = 0;
gdjs.MainLandSceneCode.GDPlayerObjects2.length = 0;
gdjs.MainLandSceneCode.GDSolidColliderObjects1.length = 0;
gdjs.MainLandSceneCode.GDSolidColliderObjects2.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects1.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595GoalBoardObjects2.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects1.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595DoorObjects2.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects1.length = 0;
gdjs.MainLandSceneCode.GDTrigger_9595ForestObjects2.length = 0;
gdjs.MainLandSceneCode.GDNoticeBoardBackgrundObjects1.length = 0;
gdjs.MainLandSceneCode.GDNoticeBoardBackgrundObjects2.length = 0;
gdjs.MainLandSceneCode.GDHint_9595DoorObjects1.length = 0;
gdjs.MainLandSceneCode.GDHint_9595DoorObjects2.length = 0;
gdjs.MainLandSceneCode.GDHint_9595BoardObjects1.length = 0;
gdjs.MainLandSceneCode.GDHint_9595BoardObjects2.length = 0;
gdjs.MainLandSceneCode.GDHint_9595ForestObjects1.length = 0;
gdjs.MainLandSceneCode.GDHint_9595ForestObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595CloseBoardObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595CompleteObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595CompleteObjects2.length = 0;
gdjs.MainLandSceneCode.GDInput_9595NewTaskObjects1.length = 0;
gdjs.MainLandSceneCode.GDInput_9595NewTaskObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595AddObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595AddObjects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595TaskNewObjects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595TaskNewObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595ShowObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595ShowObjects2.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595DeleteObjects1.length = 0;
gdjs.MainLandSceneCode.GDBtn_9595DeleteObjects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task1Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task1Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task2Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task2Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task3Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task3Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task4Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task4Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task5Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task5Objects2.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task6Objects1.length = 0;
gdjs.MainLandSceneCode.GDText_9595Task6Objects2.length = 0;
gdjs.MainLandSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.MainLandSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.MainLandSceneCode.GDNewTextObjects1.length = 0;
gdjs.MainLandSceneCode.GDNewTextObjects2.length = 0;
gdjs.MainLandSceneCode.GDCloseForestObjects1.length = 0;
gdjs.MainLandSceneCode.GDCloseForestObjects2.length = 0;


return;

}

gdjs['MainLandSceneCode'] = gdjs.MainLandSceneCode;
