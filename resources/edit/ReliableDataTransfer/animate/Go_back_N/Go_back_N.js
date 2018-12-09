(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 0.25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhejgIC9AAIAAHBIi9AAg");
	this.shape.setTransform(9.5,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AheDhIAAnBIC8AAIAAHBg");
	this.shape_1.setTransform(9.5,22.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,21,47);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Not usable", "12px 'Times New Roman'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 83;
	this.text.setTransform(269.4,-36.2,0.856,1);

	this.text_1 = new cjs.Text("Usable, \nnot ye sent", "12px 'Times New Roman'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 60;
	this.text_1.setTransform(200.5,-36.2,0.856,1);

	this.text_2 = new cjs.Text("Sent, \nnot yet ACK", "12px 'Times New Roman'");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 69;
	this.text_2.setTransform(269.3,-106.5,0.856,1);

	this.text_3 = new cjs.Text("ACKed", "12px 'Times New Roman'");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 42;
	this.text_3.setTransform(200.5,-106.5,0.856,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgsiQIBZAAIAAEhIhZAAg");
	this.shape.setTransform(260.3,-21.7,0.856,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrCRIAAkgIBYAAIAAEgg");
	this.shape_1.setTransform(260.3,-21.7,0.856,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgsiQIBZAAIAAEhIhZAAg");
	this.shape_2.setTransform(192.7,-21.4,0.856,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgrCQIAAkgIBYAAIAAEgg");
	this.shape_3.setTransform(192.7,-21.4,0.856,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgsiQIBZAAIAAEhIhZAAg");
	this.shape_4.setTransform(260.8,-91.8,0.856,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#33CCCC").s().p("AgrCQIAAkgIBYAAIAAEgg");
	this.shape_5.setTransform(260.8,-91.8,0.856,1);

	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(192.9,-91.9,0.406,0.644,0,0,0,10.4,22.2);

	this.addChild(this.instance,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(187.7,-107.3,155.9,114.4);


// stage content:
(lib.Go_back_N = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Narration
	this.text = new cjs.Text("Note how cumulative\n ACK works in this case", "19px 'Times New Roman'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 204;
	this.text.setTransform(278,174.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AC5GWQlNARgks8");
	this.shape.setTransform(162.4,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text,p:{x:278,y:174.5,text:"Note how cumulative\n ACK works in this case"}}]},23).to({state:[]},1).to({state:[{t:this.text,p:{x:275.4,y:196.5,text:"Continue ....."}}]},1).wait(1));

	// Timer
	this.text_1 = new cjs.Text("Start Timer", "20px 'Times New Roman'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 116;
	this.text_1.setTransform(282.4,194.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6,1,1).p("AD3AAQAABmhJBIQgBABgBABQhIBGhkAAQhkAAhJhIQhIhIAAhmQAAhkBIhJQBJhIBkAAQBmAABIBIQBJBJAABkgAhtANIBsAAIgBACABghrIhhB4");
	this.shape_1.setTransform(196.2,209);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AitCuQhIhIAAhmQAAhkBIhJQBIhIBlAAQBmAABIBIQBIBJAABkQAABmhIBIIgDADQhHBGhkAAQhlgBhIhIgAgCAPIABgCIhsAAIBsAAgAgBANIBhh4g");
	this.shape_2.setTransform(196.2,209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("AD3AAQAABmhJBIQgBABgBABQhIBGhkAAQhkAAhJhIQhIhIAAhmQAAhkBIhJQBJhIBkAAQBmAABIBIQBJBJAABkgAgBANIgBACAhtANIBsAAABghrIhhB4");
	this.shape_3.setTransform(196.2,209);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("AD2AAQAABmhIBIQgCABgBACQhHBGhkAAQhlAAhIhJQhJhIAAhmQAAhkBJhJQBIhIBlAAQBmAABIBIQBIBJAABkgABfhqIhgB3AhuANIBtAAIgCAC");
	this.shape_4.setTransform(226.1,219.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AitCuQhJhIAAhmQAAhlBJhIQBIhJBlAAQBmAABIBJQBIBIAABlQAABmhIBIIgCACQhIBGhkAAQhlABhIhJgAgDAPIACgCIhtAAIBtAAgAgBANIBgh3g");
	this.shape_5.setTransform(226.1,219.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text_1,p:{text:"Start Timer",x:282.4,lineWidth:116}}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text_1,p:{text:"Start Timer",x:282.4,lineWidth:116}}]},4).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text_1,p:{text:"Stop Timer",x:282.4,lineWidth:116}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text_1,p:{text:"Start Timer",x:282.4,lineWidth:116}}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text_1,p:{text:"Start Timer",x:282.4,lineWidth:116}}]},6).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.text_1,p:{text:"Wait for timeout",x:293.2,lineWidth:138}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.text_1,p:{text:"Timeout And retransmit!\nStart timer again",x:354.6,lineWidth:203}}]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text_1,p:{text:"Stop Timer",x:282.4,lineWidth:116}}]},5).to({state:[]},1).wait(1));

	// Pointers
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AAADMIgvhcAAADMIAAmXAAADMIAwhY");
	this.shape_6.setTransform(38.6,42.9);

	this.text_2 = new cjs.Text("nextseqnum", "14px 'Times New Roman'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 73;
	this.text_2.setTransform(36.6,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(2,1,1).p("AAABVIgvgmAAABVIAwglAAABVIAAip");
	this.shape_7.setTransform(38.7,51.8);

	this.text_3 = new cjs.Text("base", "14px 'Times New Roman'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 16;
	this.text_3.lineWidth = 36;
	this.text_3.setTransform(37.8,25.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AAADMIAwhYAAADMIgvhcAAADMIAAmX");
	this.shape_8.setTransform(68.3,42.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(2,1,1).p("AAADMIgvhcAAADMIAwhYAAADMIAAmX");
	this.shape_9.setTransform(98.2,42.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("AAABVIAwglAAABVIgvgmAAABVIAAip");
	this.shape_10.setTransform(67.5,54.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(2,1,1).p("AAADMIAwhYAAADMIAAmXAAADMIgvhc");
	this.shape_11.setTransform(125.4,42.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3,p:{x:37.8,y:25.6}},{t:this.shape_7,p:{x:38.7,y:51.8}},{t:this.text_2,p:{x:36.6}},{t:this.shape_6}]}).to({state:[{t:this.text_3,p:{x:37.8,y:25.6}},{t:this.shape_7,p:{x:38.7,y:51.8}},{t:this.text_2,p:{x:66.3}},{t:this.shape_8,p:{x:68.3}}]},1).to({state:[{t:this.text_3,p:{x:37.8,y:25.6}},{t:this.shape_7,p:{x:38.7,y:51.8}},{t:this.text_2,p:{x:96.2}},{t:this.shape_8,p:{x:98.2}}]},1).to({state:[{t:this.text_3,p:{x:66.6,y:28.4}},{t:this.shape_10,p:{x:67.5}},{t:this.text_2,p:{x:96.2}},{t:this.shape_9,p:{x:98.2}}]},4).to({state:[{t:this.text_3,p:{x:96.1,y:28.4}},{t:this.shape_10,p:{x:97}},{t:this.text_2,p:{x:96.2}},{t:this.shape_8,p:{x:98.2}}]},2).to({state:[{t:this.text_3,p:{x:96.1,y:28.4}},{t:this.shape_10,p:{x:97}},{t:this.text_2,p:{x:123.4}},{t:this.shape_11}]},1).to({state:[{t:this.text_3,p:{x:96.1,y:28.4}},{t:this.shape_10,p:{x:97}},{t:this.text_2,p:{x:154.6}},{t:this.shape_9,p:{x:156.7}}]},1).to({state:[{t:this.text_3,p:{x:96.1,y:28.4}},{t:this.shape_10,p:{x:97}},{t:this.text_2,p:{x:186.4}},{t:this.shape_9,p:{x:188.4}}]},1).to({state:[{t:this.text_3,p:{x:127.8,y:28.4}},{t:this.shape_7,p:{x:128.7,y:54.7}},{t:this.text_2,p:{x:186.4}},{t:this.shape_8,p:{x:188.4}}]},5).to({state:[{t:this.text_3,p:{x:186,y:28.4}},{t:this.shape_10,p:{x:186.9}},{t:this.text_2,p:{x:186.4}},{t:this.shape_9,p:{x:188.4}}]},8).wait(2));

	// Receiver sent
	this.text_4 = new cjs.Text("Send\n Ack", "14px 'Times New Roman'", "#FF0066");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 16;
	this.text_4.lineWidth = 43;
	this.text_4.setTransform(38.9,359.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_12.setTransform(41.6,253.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0066").s().p("AglCQIAAkgIBLAAIAAEgg");
	this.shape_13.setTransform(41.6,253.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0066").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_14.setTransform(71.7,255);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_15.setTransform(35.9,186);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0066").s().p("AglCRIAAkhIBLAAIAAEhg");
	this.shape_16.setTransform(68.8,157.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0066").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_17.setTransform(38.5,90);

	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(38.8,89.8,0.406,0.644,0,0,0,10.4,22.2);

	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.setTransform(38.8,89.8,0.406,0.644,0,0,0,10.4,22.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0066").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_18.setTransform(68.7,90);

	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.setTransform(38.8,89.8,0.406,0.644,0,0,0,10.4,22.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0066").s().p("AglCQIAAkgIBLAAIAAEgg");
	this.shape_19.setTransform(98.6,89);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_20.setTransform(68.7,90);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_21.setTransform(68.7,90);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AglCRIAAkhIBLAAIAAEhg");
	this.shape_22.setTransform(127,160.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(3,1,1).p("AAAAAIgiBIAgihOIAiBOAAXgyIgXAyIAjBP");
	this.shape_23.setTransform(141.7,160.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(3,1,1).p("AAAAAIAjBPAAWgyIgWAyAgihOIAiBOIgiBI");
	this.shape_24.setTransform(126.7,160.9);

	this.instance_3 = new lib.Symbol4("synched",0);
	this.instance_3.setTransform(69.1,89.8,0.406,0.644,0,0,0,10.4,22.2);

	this.instance_4 = new lib.Symbol4("synched",0);
	this.instance_4.setTransform(38.8,89.8,0.406,0.644,0,0,0,10.4,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13,p:{x:41.6,y:253.5}},{t:this.shape_12,p:{x:41.6,y:253.5}},{t:this.text_4,p:{x:38.9,y:359.9,lineWidth:43,text:"Send\n Ack",font:"14px 'Times New Roman'",color:"#FF0066",lineHeight:16}}]},3).to({state:[{t:this.shape_13,p:{x:35.9,y:186}},{t:this.shape_15,p:{x:35.9,y:186}},{t:this.text_4,p:{x:62.5,y:356.9,lineWidth:42,text:"Send\n Ack",font:"14px 'Times New Roman'",color:"#FF0066",lineHeight:16}},{t:this.shape_14,p:{x:71.7,y:255}},{t:this.shape_12,p:{x:71.7,y:255}}]},1).to({state:[{t:this.shape_17,p:{x:38.5,y:90}},{t:this.shape_15,p:{x:38.5,y:90}},{t:this.shape_16,p:{x:68.8,y:157.5}},{t:this.shape_12,p:{x:68.8,y:157.5}}]},1).to({state:[{t:this.shape_17,p:{x:38.5,y:90}},{t:this.shape_15,p:{x:38.5,y:90}},{t:this.shape_14,p:{x:68.8,y:126.2}},{t:this.shape_12,p:{x:68.8,y:126.2}},{t:this.instance,p:{x:38.8,y:89.8}}]},1).to({state:[{t:this.shape_17,p:{x:68.7,y:90}},{t:this.shape_12,p:{x:68.7,y:90}},{t:this.instance,p:{x:38.8,y:89.8}}]},1).to({state:[{t:this.shape_17,p:{x:68.7,y:90}},{t:this.shape_12,p:{x:68.7,y:90}},{t:this.instance_1,p:{x:38.8}},{t:this.instance,p:{x:68.3,y:89.8}}]},1).to({state:[{t:this.shape_18},{t:this.shape_15,p:{x:68.7,y:90}},{t:this.instance_1,p:{x:38.8}},{t:this.instance,p:{x:68.3,y:89.8}},{t:this.shape_17,p:{x:100.5,y:260.5}},{t:this.shape_12,p:{x:100.5,y:260.5}},{t:this.text_4,p:{x:96,y:349.3,lineWidth:43,text:"Send\n Ack",font:"14px 'Times New Roman'",color:"#FF0066",lineHeight:16}}]},5).to({state:[{t:this.shape_18},{t:this.shape_15,p:{x:68.7,y:90}},{t:this.instance_1,p:{x:38.8}},{t:this.instance,p:{x:68.3,y:89.8}},{t:this.shape_17,p:{x:100.5,y:184}},{t:this.shape_12,p:{x:100.5,y:184}}]},1).to({state:[{t:this.shape_17,p:{x:68.7,y:90}},{t:this.shape_15,p:{x:68.7,y:90}},{t:this.instance_1,p:{x:38.8}},{t:this.instance,p:{x:68.3,y:89.8}},{t:this.shape_13,p:{x:98.6,y:89}},{t:this.shape_12,p:{x:98.6,y:89}}]},1).to({state:[{t:this.shape_17,p:{x:68.7,y:90}},{t:this.shape_15,p:{x:68.7,y:90}},{t:this.instance_2,p:{x:38.8,y:89.8}},{t:this.instance_1,p:{x:68.3}},{t:this.shape_13,p:{x:98.6,y:89}},{t:this.shape_12,p:{x:98.6,y:89}},{t:this.instance,p:{x:99,y:88.8}}]},1).to({state:[{t:this.shape_17,p:{x:68.7,y:90}},{t:this.shape_20,p:{x:68.7,y:90}},{t:this.instance_2,p:{x:38.8,y:89.8}},{t:this.instance_1,p:{x:68.3}},{t:this.shape_19},{t:this.shape_15,p:{x:98.6,y:89}},{t:this.instance,p:{x:99,y:88.8}},{t:this.shape_13,p:{x:130.7,y:264.3}},{t:this.shape_12,p:{x:130.7,y:264.3}},{t:this.text_4,p:{x:128.5,y:359.9,lineWidth:43,text:"Send\n Ack",font:"14px 'Times New Roman'",color:"#FF0066",lineHeight:16}}]},3).to({state:[{t:this.shape_17,p:{x:68.7,y:90}},{t:this.shape_21},{t:this.instance_2,p:{x:38.8,y:89.8}},{t:this.instance_1,p:{x:68.3}},{t:this.shape_13,p:{x:98.6,y:89}},{t:this.shape_20,p:{x:98.6,y:89}},{t:this.instance,p:{x:99,y:88.8}},{t:this.shape_16,p:{x:127,y:160.3}},{t:this.shape_15,p:{x:127,y:160.3}},{t:this.shape_14,p:{x:160.2,y:235.3}},{t:this.shape_12,p:{x:160.2,y:235.3}},{t:this.text_4,p:{x:160.9,y:359.9,lineWidth:43,text:"Send\n Ack",font:"14px 'Times New Roman'",color:"#FF0066",lineHeight:16}}]},1).to({state:[{t:this.shape_17,p:{x:68.7,y:90}},{t:this.shape_21},{t:this.instance_2,p:{x:38.8,y:89.8}},{t:this.instance_1,p:{x:68.3}},{t:this.shape_13,p:{x:98.6,y:89}},{t:this.shape_20,p:{x:98.6,y:89}},{t:this.instance,p:{x:99,y:88.8}},{t:this.shape_14,p:{x:160.2,y:235.3}},{t:this.shape_15,p:{x:160.2,y:235.3}},{t:this.text_4,p:{x:213.6,y:148.6,lineWidth:132,text:"ACK corrupt!",font:"20px 'Times New Roman'",color:"#000000",lineHeight:22}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_12,p:{x:127,y:160.3}}]},1).to({state:[{t:this.shape_17,p:{x:68.7,y:90}},{t:this.shape_20,p:{x:68.7,y:90}},{t:this.instance_2,p:{x:38.8,y:89.8}},{t:this.instance_1,p:{x:68.3}},{t:this.shape_13,p:{x:98.6,y:89}},{t:this.shape_15,p:{x:98.6,y:89}},{t:this.instance,p:{x:99,y:88.8}},{t:this.shape_14,p:{x:160.2,y:235.3}},{t:this.shape_12,p:{x:160.2,y:235.3}},{t:this.text_4,p:{x:234.9,y:148.6,lineWidth:204,text:"Corrupted ACK discard!",font:"20px 'Times New Roman'",color:"#000000",lineHeight:22}},{t:this.shape_24}]},1).to({state:[{t:this.shape_18},{t:this.shape_20,p:{x:68.7,y:90}},{t:this.instance_2,p:{x:38.8,y:89.8}},{t:this.instance_1,p:{x:68.3}},{t:this.shape_13,p:{x:98.6,y:89}},{t:this.shape_15,p:{x:98.6,y:89}},{t:this.instance,p:{x:99,y:88.8}},{t:this.shape_17,p:{x:157.6,y:90}},{t:this.shape_12,p:{x:157.6,y:90}}]},1).to({state:[{t:this.shape_18},{t:this.shape_20,p:{x:68.7,y:90}},{t:this.instance_4},{t:this.instance_3},{t:this.shape_13,p:{x:98.6,y:89}},{t:this.shape_15,p:{x:98.6,y:89}},{t:this.instance_2,p:{x:99,y:89.2}},{t:this.shape_17,p:{x:157.6,y:90}},{t:this.shape_12,p:{x:157.6,y:90}},{t:this.instance_1,p:{x:128.4}},{t:this.instance,p:{x:158.2,y:89.8}}]},1).wait(2));

	// Sender sent
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_25.setTransform(38.5,162.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#66FF00").s().p("AglCQIAAkgIBLAAIAAEgg");
	this.shape_26.setTransform(38.5,162.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66FF00").s().p("AglCRIAAkhIBLAAIAAEhg");
	this.shape_27.setTransform(68.7,163.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_28.setTransform(38.5,208.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66FF00").s().p("AglCRIAAkhIBLAAIAAEhg");
	this.shape_29.setTransform(38.5,208.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#66FF00").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_30.setTransform(71.2,256.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#66FF00").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_31.setTransform(41,301.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#33CCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_32.setTransform(98.6,90);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_33.setTransform(70.9,301.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_34.setTransform(41,301.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#66FF00").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_35.setTransform(41,301.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#66FF00").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_36.setTransform(128,157.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33CCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_37.setTransform(98.6,90);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_38.setTransform(70.9,301.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_39.setTransform(41,301.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#33CCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_40.setTransform(98.6,90);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#66FF00").s().p("AglCQIAAkgIBLAAIAAEgg");
	this.shape_41.setTransform(98.6,259);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_42.setTransform(70.9,301.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_43.setTransform(41,301.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF0000").ss(3,1,1).p("AAAAAIgiBIAgihOIAiBOAAXgyIgXAyIAjBP");
	this.shape_44.setTransform(131,207.5);

	this.text_5 = new cjs.Text("Packet Lost", "20px 'Times New Roman'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 22;
	this.text_5.lineWidth = 95;
	this.text_5.setTransform(184.6,195.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FF0000").ss(3,1,1).p("AAAAAIgiBIAgihOIAiBOAAWgyIgWAyIAjBP");
	this.shape_45.setTransform(178.3,267.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CCCCCC").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_46.setTransform(160.2,287.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66FF00").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_47.setTransform(41,301.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66FF00").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_48.setTransform(41,301.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26,p:{x:38.5,y:162.8}},{t:this.shape_25,p:{x:38.5,y:162.8}}]},1).to({state:[{t:this.shape_29},{t:this.shape_28,p:{x:38.5,y:208.8}},{t:this.shape_27,p:{x:68.7,y:163.8}},{t:this.shape_25,p:{x:68.7,y:163.8}}]},1).to({state:[{t:this.shape_31,p:{x:41}},{t:this.shape_28,p:{x:41,y:301.8}},{t:this.shape_30,p:{x:71.2,y:256.8}},{t:this.shape_25,p:{x:71.2,y:256.8}}]},1).to({state:[{t:this.shape_31,p:{x:41}},{t:this.shape_28,p:{x:41,y:301.8}},{t:this.shape_30,p:{x:70.9,y:301.8}},{t:this.shape_25,p:{x:70.9,y:301.8}}]},1).to({state:[{t:this.shape_31,p:{x:41}},{t:this.shape_28,p:{x:41,y:301.8}},{t:this.shape_30,p:{x:70.9,y:301.8}},{t:this.shape_25,p:{x:70.9,y:301.8}}]},1).to({state:[{t:this.shape_35,p:{x:41}},{t:this.shape_34,p:{x:41,y:301.8}},{t:this.shape_31,p:{x:70.9}},{t:this.shape_33,p:{x:70.9,y:301.8}},{t:this.shape_30,p:{x:98.6,y:165.8}},{t:this.shape_28,p:{x:98.6,y:165.8}},{t:this.shape_32,p:{x:98.6}},{t:this.shape_25,p:{x:98.6,y:90}}]},4).to({state:[{t:this.shape_35,p:{x:41}},{t:this.shape_39,p:{x:41,y:301.8}},{t:this.shape_31,p:{x:70.9}},{t:this.shape_38,p:{x:70.9,y:301.8}},{t:this.shape_30,p:{x:98.6,y:212.8}},{t:this.shape_34,p:{x:98.6,y:212.8}},{t:this.shape_37,p:{x:98.6}},{t:this.shape_33,p:{x:98.6,y:90}},{t:this.shape_32,p:{x:128}},{t:this.shape_28,p:{x:128,y:90}},{t:this.shape_36,p:{x:128,y:157.5}},{t:this.shape_25,p:{x:128,y:157.5}}]},1).to({state:[{t:this.shape_31,p:{x:41}},{t:this.shape_43},{t:this.shape_30,p:{x:70.9,y:301.8}},{t:this.shape_42,p:{x:70.9}},{t:this.shape_41},{t:this.shape_39,p:{x:98.6,y:259}},{t:this.shape_40},{t:this.shape_38,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_34,p:{x:128,y:90}},{t:this.shape_26,p:{x:128,y:203.7}},{t:this.shape_33,p:{x:128,y:203.7}},{t:this.shape_27,p:{x:157.8,y:158.8}},{t:this.shape_28,p:{x:157.8,y:158.8}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_25,p:{x:157.6,y:90}}]},1).to({state:[{t:this.shape_31,p:{x:41}},{t:this.shape_42,p:{x:41}},{t:this.shape_30,p:{x:70.9,y:301.8}},{t:this.shape_39,p:{x:70.9,y:301.8}},{t:this.shape_26,p:{x:98.6,y:259}},{t:this.shape_38,p:{x:98.6,y:259}},{t:this.shape_40},{t:this.shape_34,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_33,p:{x:128,y:90}},{t:this.shape_27,p:{x:157.8,y:158.8}},{t:this.shape_28,p:{x:157.8,y:158.8}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_25,p:{x:157.6,y:90}},{t:this.text_5,p:{x:184.6,y:195.2,text:"Packet Lost",lineWidth:95}},{t:this.shape_44}]},1).to({state:[{t:this.shape_35,p:{x:41}},{t:this.shape_42,p:{x:41}},{t:this.shape_31,p:{x:70.9}},{t:this.shape_39,p:{x:70.9,y:301.8}},{t:this.shape_30,p:{x:101.2,y:301.8}},{t:this.shape_38,p:{x:101.2,y:301.8}},{t:this.shape_40},{t:this.shape_34,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_33,p:{x:128,y:90}},{t:this.shape_36,p:{x:160.2,y:243.8}},{t:this.shape_28,p:{x:160.2,y:243.8}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_25,p:{x:157.6,y:90}}]},1).to({state:[{t:this.shape_35,p:{x:41}},{t:this.shape_42,p:{x:41}},{t:this.shape_31,p:{x:70.9}},{t:this.shape_39,p:{x:70.9,y:301.8}},{t:this.shape_30,p:{x:101.2,y:301.8}},{t:this.shape_38,p:{x:101.2,y:301.8}},{t:this.shape_40},{t:this.shape_34,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_33,p:{x:128,y:90}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_28,p:{x:157.6,y:90}},{t:this.shape_46},{t:this.shape_25,p:{x:160.2,y:287.3}},{t:this.text_5,p:{x:250.2,y:255.5,text:"Packet discard!",lineWidth:132}},{t:this.shape_45}]},1).to({state:[{t:this.shape_35,p:{x:41}},{t:this.shape_39,p:{x:41,y:301.8}},{t:this.shape_31,p:{x:70.9}},{t:this.shape_38,p:{x:70.9,y:301.8}},{t:this.shape_30,p:{x:101.2,y:301.8}},{t:this.shape_34,p:{x:101.2,y:301.8}},{t:this.shape_40},{t:this.shape_33,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_28,p:{x:128,y:90}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_25,p:{x:157.6,y:90}}]},1).to({state:[{t:this.shape_35,p:{x:41}},{t:this.shape_39,p:{x:41,y:301.8}},{t:this.shape_31,p:{x:70.9}},{t:this.shape_38,p:{x:70.9,y:301.8}},{t:this.shape_40},{t:this.shape_34,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_33,p:{x:128,y:90}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_28,p:{x:157.6,y:90}},{t:this.shape_30,p:{x:100.5,y:301.8}},{t:this.shape_25,p:{x:100.5,y:301.8}}]},1).to({state:[{t:this.shape_47,p:{x:41}},{t:this.shape_43},{t:this.shape_35,p:{x:70.9}},{t:this.shape_42,p:{x:70.9}},{t:this.shape_31,p:{x:100.5}},{t:this.shape_39,p:{x:100.5,y:301.8}},{t:this.shape_40},{t:this.shape_38,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_34,p:{x:128,y:90}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_33,p:{x:157.6,y:90}},{t:this.shape_30,p:{x:157.6,y:157.8}},{t:this.shape_28,p:{x:157.6,y:157.8}},{t:this.shape_26,p:{x:130.3,y:209}},{t:this.shape_25,p:{x:130.3,y:209}}]},2).to({state:[{t:this.shape_47,p:{x:41}},{t:this.shape_43},{t:this.shape_35,p:{x:70.9}},{t:this.shape_42,p:{x:70.9}},{t:this.shape_31,p:{x:100.5}},{t:this.shape_39,p:{x:100.5,y:301.8}},{t:this.shape_40},{t:this.shape_38,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_34,p:{x:128,y:90}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_33,p:{x:157.6,y:90}},{t:this.shape_26,p:{x:160.2,y:264.3}},{t:this.shape_28,p:{x:160.2,y:264.3}},{t:this.shape_30,p:{x:130.3,y:301.8}},{t:this.shape_25,p:{x:130.3,y:301.8}}]},1).to({state:[{t:this.shape_48},{t:this.shape_43},{t:this.shape_47,p:{x:70.9}},{t:this.shape_42,p:{x:70.9}},{t:this.shape_35,p:{x:100.5}},{t:this.shape_39,p:{x:100.5,y:301.8}},{t:this.shape_40},{t:this.shape_38,p:{x:98.6,y:90}},{t:this.shape_37,p:{x:128}},{t:this.shape_34,p:{x:128,y:90}},{t:this.shape_32,p:{x:157.6}},{t:this.shape_33,p:{x:157.6,y:90}},{t:this.shape_31,p:{x:160.2}},{t:this.shape_28,p:{x:160.2,y:301.8}},{t:this.shape_30,p:{x:130.3,y:301.8}},{t:this.shape_25,p:{x:130.3,y:301.8}}]},1).wait(6));

	// Sliding window
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FF0000").ss(2,1,1).p("Ao1jkIRrAAIAAHJIxrAAg");
	this.shape_49.setTransform(83.9,89.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(6).to({x:111.3,y:88.7},0).wait(2).to({x:143.5},0).wait(8).to({x:172.5},0).wait(8).to({x:230},0).wait(2));

	// Upper Packet Queue
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_50.setTransform(98.6,90);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_51.setTransform(98.6,90);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_52.setTransform(68.8,90);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_53.setTransform(68.8,90);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_54.setTransform(38.5,90);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_55.setTransform(38.5,90);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_56.setTransform(128,90);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_57.setTransform(128,90);

	this.text_6 = new cjs.Text("10", "14px 'Times New Roman'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 16;
	this.text_6.lineWidth = 14;
	this.text_6.setTransform(304.7,118);

	this.text_7 = new cjs.Text("9", "14px 'Times New Roman'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 16;
	this.text_7.lineWidth = 10;
	this.text_7.setTransform(275.2,118);

	this.text_8 = new cjs.Text("8", "14px 'Times New Roman'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 16;
	this.text_8.lineWidth = 10;
	this.text_8.setTransform(244.9,118);

	this.text_9 = new cjs.Text("7", "14px 'Times New Roman'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 16;
	this.text_9.lineWidth = 10;
	this.text_9.setTransform(215.4,118);

	this.text_10 = new cjs.Text("6", "14px 'Times New Roman'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 16;
	this.text_10.lineWidth = 10;
	this.text_10.setTransform(185.9,118);

	this.text_11 = new cjs.Text("5", "14px 'Times New Roman'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 16;
	this.text_11.lineWidth = 10;
	this.text_11.setTransform(156.4,118);

	this.text_12 = new cjs.Text("4", "14px 'Times New Roman'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 16;
	this.text_12.lineWidth = 10;
	this.text_12.setTransform(125.6,118);

	this.text_13 = new cjs.Text("3", "14px 'Times New Roman'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 16;
	this.text_13.lineWidth = 10;
	this.text_13.setTransform(96.1,118);

	this.text_14 = new cjs.Text("2", "14px 'Times New Roman'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 16;
	this.text_14.lineWidth = 10;
	this.text_14.setTransform(66.6,118);

	this.text_15 = new cjs.Text("1", "14px 'Times New Roman'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 16;
	this.text_15.lineWidth = 10;
	this.text_15.setTransform(37.1,118);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_58.setTransform(306.9,90);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_59.setTransform(306.9,90);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_60.setTransform(277,90);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_61.setTransform(277,90);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_62.setTransform(246.9,90);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_63.setTransform(246.9,90);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_64.setTransform(217.1,90);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_65.setTransform(217.1,90);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_66.setTransform(187.5,90);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_67.setTransform(187.5,90);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_68.setTransform(157.6,90);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_69.setTransform(157.6,90);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#33CCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_70.setTransform(38.5,90);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_71.setTransform(157.6,90);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#33CCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_72.setTransform(68.7,90);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_73.setTransform(157.6,90);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_74.setTransform(128,90);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_75.setTransform(157.6,90);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_76.setTransform(128,90);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_77.setTransform(157.6,90);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_78.setTransform(128,90);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_79.setTransform(157.6,90);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_80.setTransform(38.5,90);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CCCCCC").s().p("AglCQIAAkfIBLAAIAAEfg");
	this.shape_81.setTransform(128,90);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_82.setTransform(187.5,90);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_83.setTransform(157.6,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68,p:{x:157.6}},{t:this.shape_67},{t:this.shape_66,p:{x:187.5}},{t:this.shape_65},{t:this.shape_64,p:{x:217.1}},{t:this.shape_63},{t:this.shape_62,p:{x:246.9}},{t:this.shape_61},{t:this.shape_60,p:{x:277}},{t:this.shape_59},{t:this.shape_58,p:{x:306.9}},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.shape_57,p:{x:128}},{t:this.shape_56,p:{x:128}},{t:this.shape_55,p:{x:38.5}},{t:this.shape_54,p:{x:38.5}},{t:this.shape_53,p:{x:68.8}},{t:this.shape_52,p:{x:68.8}},{t:this.shape_51,p:{x:98.6}},{t:this.shape_50,p:{x:98.6}}]}).to({state:[{t:this.shape_69},{t:this.shape_71,p:{x:157.6}},{t:this.shape_67},{t:this.shape_68,p:{x:187.5}},{t:this.shape_65},{t:this.shape_66,p:{x:217.1}},{t:this.shape_63},{t:this.shape_64,p:{x:246.9}},{t:this.shape_61},{t:this.shape_62,p:{x:277}},{t:this.shape_59},{t:this.shape_60,p:{x:306.9}},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.shape_57,p:{x:128}},{t:this.shape_58,p:{x:128}},{t:this.shape_55,p:{x:38.5}},{t:this.shape_56,p:{x:38.5}},{t:this.shape_53,p:{x:68.8}},{t:this.shape_54,p:{x:68.8}},{t:this.shape_51,p:{x:98.6}},{t:this.shape_52,p:{x:98.6}},{t:this.shape_70},{t:this.shape_50,p:{x:38.5}}]},1).to({state:[{t:this.shape_69},{t:this.shape_73,p:{x:157.6}},{t:this.shape_67},{t:this.shape_71,p:{x:187.5}},{t:this.shape_65},{t:this.shape_68,p:{x:217.1}},{t:this.shape_63},{t:this.shape_66,p:{x:246.9}},{t:this.shape_61},{t:this.shape_64,p:{x:277}},{t:this.shape_59},{t:this.shape_62,p:{x:306.9}},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.shape_57,p:{x:128}},{t:this.shape_60,p:{x:128}},{t:this.shape_55,p:{x:38.5}},{t:this.shape_58,p:{x:38.5}},{t:this.shape_53,p:{x:68.8}},{t:this.shape_56,p:{x:68.8}},{t:this.shape_51,p:{x:98.6}},{t:this.shape_54,p:{x:98.6}},{t:this.shape_72},{t:this.shape_52,p:{x:68.7}},{t:this.shape_70},{t:this.shape_50,p:{x:38.5}}]},1).to({state:[{t:this.shape_69},{t:this.shape_75,p:{x:157.6}},{t:this.shape_67},{t:this.shape_73,p:{x:187.5}},{t:this.shape_65},{t:this.shape_71,p:{x:217.1}},{t:this.shape_63},{t:this.shape_68,p:{x:246.9}},{t:this.shape_61},{t:this.shape_66,p:{x:277}},{t:this.shape_59},{t:this.shape_64,p:{x:306.9}},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.shape_74,p:{x:128}},{t:this.shape_62,p:{x:128}},{t:this.shape_57,p:{x:38.5}},{t:this.shape_60,p:{x:38.5}},{t:this.shape_55,p:{x:68.8}},{t:this.shape_58,p:{x:68.8}},{t:this.shape_53,p:{x:98.6}},{t:this.shape_56,p:{x:98.6}},{t:this.shape_72},{t:this.shape_54,p:{x:68.7}},{t:this.shape_70},{t:this.shape_52,p:{x:38.5}},{t:this.shape_51,p:{x:157.6}},{t:this.shape_50,p:{x:157.6}}]},4).to({state:[{t:this.shape_69},{t:this.shape_77,p:{x:157.6}},{t:this.shape_67},{t:this.shape_75,p:{x:187.5}},{t:this.shape_65},{t:this.shape_73,p:{x:217.1}},{t:this.shape_63},{t:this.shape_71,p:{x:246.9}},{t:this.shape_61},{t:this.shape_68,p:{x:277}},{t:this.shape_59},{t:this.shape_66,p:{x:306.9}},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.shape_76,p:{x:128}},{t:this.shape_64,p:{x:128}},{t:this.shape_74,p:{x:38.5}},{t:this.shape_62,p:{x:38.5}},{t:this.shape_57,p:{x:68.8}},{t:this.shape_60,p:{x:68.8}},{t:this.shape_55,p:{x:98.6}},{t:this.shape_58,p:{x:98.6}},{t:this.shape_72},{t:this.shape_56,p:{x:68.7}},{t:this.shape_70},{t:this.shape_54,p:{x:38.5}},{t:this.shape_53,p:{x:157.6}},{t:this.shape_52,p:{x:157.6}},{t:this.shape_51,p:{x:187.3}},{t:this.shape_50,p:{x:187.3}}]},2).to({state:[{t:this.shape_69},{t:this.shape_79,p:{x:157.6}},{t:this.shape_67},{t:this.shape_77,p:{x:187.5}},{t:this.shape_65},{t:this.shape_75,p:{x:217.1}},{t:this.shape_63},{t:this.shape_73,p:{x:246.9}},{t:this.shape_61},{t:this.shape_71,p:{x:277}},{t:this.shape_59},{t:this.shape_68,p:{x:306.9}},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.shape_78,p:{x:128}},{t:this.shape_66,p:{x:128}},{t:this.shape_76,p:{x:38.5}},{t:this.shape_64,p:{x:38.5}},{t:this.shape_74,p:{x:68.8}},{t:this.shape_62,p:{x:68.8}},{t:this.shape_57,p:{x:98.6}},{t:this.shape_60,p:{x:98.6}},{t:this.shape_72},{t:this.shape_58,p:{x:68.7}},{t:this.shape_70},{t:this.shape_56,p:{x:38.5}},{t:this.shape_55,p:{x:157.6}},{t:this.shape_54,p:{x:157.6}},{t:this.shape_53,p:{x:187.3}},{t:this.shape_52,p:{x:187.3}},{t:this.shape_51,p:{x:217.1}},{t:this.shape_50,p:{x:217.1}}]},8).to({state:[{t:this.shape_69},{t:this.shape_83},{t:this.shape_67},{t:this.shape_82},{t:this.shape_65},{t:this.shape_79,p:{x:217.1}},{t:this.shape_63},{t:this.shape_77,p:{x:246.9}},{t:this.shape_61},{t:this.shape_75,p:{x:277}},{t:this.shape_59},{t:this.shape_73,p:{x:306.9}},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.shape_81},{t:this.shape_71,p:{x:128}},{t:this.shape_80},{t:this.shape_68,p:{x:38.5}},{t:this.shape_78,p:{x:68.8}},{t:this.shape_66,p:{x:68.8}},{t:this.shape_76,p:{x:98.6}},{t:this.shape_64,p:{x:98.6}},{t:this.shape_72},{t:this.shape_62,p:{x:68.7}},{t:this.shape_70},{t:this.shape_60,p:{x:38.5}},{t:this.shape_74,p:{x:157.6}},{t:this.shape_58,p:{x:157.6}},{t:this.shape_57,p:{x:187.3}},{t:this.shape_56,p:{x:187.3}},{t:this.shape_55,p:{x:217.1}},{t:this.shape_54,p:{x:217.1}},{t:this.shape_53,p:{x:246.9}},{t:this.shape_52,p:{x:246.9}},{t:this.shape_51,p:{x:277}},{t:this.shape_50,p:{x:277}}]},8).wait(2));

	// Bottom Packet Queue
	this.text_16 = new cjs.Text("10", "14px 'Times New Roman'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 16;
	this.text_16.lineWidth = 14;
	this.text_16.setTransform(307.3,329.8);

	this.text_17 = new cjs.Text("9", "14px 'Times New Roman'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 16;
	this.text_17.lineWidth = 10;
	this.text_17.setTransform(277.7,329.8);

	this.text_18 = new cjs.Text("8", "14px 'Times New Roman'");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 16;
	this.text_18.lineWidth = 10;
	this.text_18.setTransform(247.5,329.8);

	this.text_19 = new cjs.Text("7", "14px 'Times New Roman'");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 16;
	this.text_19.lineWidth = 10;
	this.text_19.setTransform(218,329.8);

	this.text_20 = new cjs.Text("6", "14px 'Times New Roman'");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 16;
	this.text_20.lineWidth = 10;
	this.text_20.setTransform(188.5,329.8);

	this.text_21 = new cjs.Text("5", "14px 'Times New Roman'");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 16;
	this.text_21.lineWidth = 10;
	this.text_21.setTransform(159,329.8);

	this.text_22 = new cjs.Text("4", "14px 'Times New Roman'");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 16;
	this.text_22.lineWidth = 10;
	this.text_22.setTransform(128.1,329.8);

	this.text_23 = new cjs.Text("3", "14px 'Times New Roman'");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 16;
	this.text_23.lineWidth = 10;
	this.text_23.setTransform(98.6,329.8);

	this.text_24 = new cjs.Text("2", "14px 'Times New Roman'");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 16;
	this.text_24.lineWidth = 10;
	this.text_24.setTransform(69.1,329.8);

	this.text_25 = new cjs.Text("1", "14px 'Times New Roman'");
	this.text_25.textAlign = "center";
	this.text_25.lineHeight = 16;
	this.text_25.lineWidth = 10;
	this.text_25.setTransform(39.6,329.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_84.setTransform(309.4,301.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_85.setTransform(309.4,301.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_86.setTransform(279.6,301.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_87.setTransform(279.6,301.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_88.setTransform(249.5,301.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_89.setTransform(249.5,301.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_90.setTransform(219.6,301.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_91.setTransform(219.6,301.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_92.setTransform(190,301.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_93.setTransform(190,301.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_94.setTransform(160.2,301.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_95.setTransform(160.2,301.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_96.setTransform(130.3,301.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_97.setTransform(130.3,301.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_98.setTransform(100.5,301.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_99.setTransform(100.5,301.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_100.setTransform(70.9,301.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_101.setTransform(70.9,301.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1,1,1).p("AgliQIBLAAIAAEhIhLAAg");
	this.shape_102.setTransform(41,301.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AglCRIAAkgIBLAAIAAEgg");
	this.shape_103.setTransform(41,301.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16}]}).wait(26));

	// Background
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(239,148.5,1,1,0,0,0,32.5,32.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,205.6,550,343.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;