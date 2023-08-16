/**
 * Copyright 2017 Advantech Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
    "use strict";
	var ETP = require('node-atetp');
	
	function ETPReadNode(n) 
			{
				RED.nodes.createNode(this,n);
				
				var node = this;
				this.on('input', function(msg) 
					{
						if (msg.payload !== null)
							{
								//console.log("[infomation] : " + " label = "+msg.payload.label);
								node.send({ payload:ETP.ETPDataRead(msg.payload.label) });
							}
					});
				
					
				this.on("close", function() {

					});
			}
	RED.nodes.registerType("ETP data read",ETPReadNode);
	
	function ETPWriteNode(n) 
			{
				RED.nodes.createNode(this,n);
				
				var node = this;
				this.on('input', function(msg) 
					{
						if (msg.payload !== null) 
							{
								//console.log("[infomation] : " + " label = "+msg.payload.label+" text = "+ msg.payload.text);
								node.send({ payload:ETP.ETPDataWrite(msg.payload.label,msg.payload.text) });
							}
					});
				
					
				this.on("close", function() {

					});
			}
	RED.nodes.registerType("ETP data write",ETPWriteNode);
	
	function ETPLockUnlockSetNode(n) 
			{
				RED.nodes.createNode(this,n);
				
				var node = this;
				this.on('input', function(msg) 
					{
						if (msg.payload !== null) 
							{
								//console.log("[infomation] : ETPLockUnlockSetNode " + msg.payload.address +" "+ msg.payload.password);
								node.send({ payload:ETP.ETPLockUnlockSet(msg.payload.address,msg.payload.password)});
							}
					});
				
					
				this.on("close", function() {

					});
			}
	RED.nodes.registerType("ETP lock unlock set",ETPLockUnlockSetNode);
	
	function ETPLockStatusCheckNode(n) 
			{
				RED.nodes.createNode(this,n);
				
				var node = this;
				this.on('input', function(msg) 
					{
						if (msg.payload !== null) 
							{
								node.send({ payload:ETP.ETPLockStatusCheck(msg.payload.address) });
							}
					});
				
					
				this.on("close", function() {

					});
			}
	RED.nodes.registerType("ETP Lock Status Check",ETPLockStatusCheckNode);

};