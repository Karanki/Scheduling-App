
window.onload = function(){

    
    var tskOption = document.createElement("div");
    var newTask = document.getElementById("fdlnew");
    var divBox = document.getElementById("fldrBox"); 
    var allTasks = [];
    //var taskLength = allTasks.length; 
   
   newTask.onclick =  function(){
      var divRow = document.createElement("div");
       divBox.appendChild(divRow);  
       divRow.className = "row";
       divRow.classList.add("mainCont");
       
       newTask.style.visibility = "hidden";

       var introSec = document.getElementById("introSec"); 
       introSec.style.visibility = "hidden";
       introSec.style.display = "none";
       
       var taskDiv = document.createElement("div");
       taskDiv.className = "col-xs-12";
       taskDiv.classList.add("tskEl");
  
       divRow.appendChild(taskDiv);
       console.log(allTasks);
       
       var taskInp = document.createElement("input");
       taskDiv.appendChild(taskInp);
       
       taskInp.className = "tskInput";
       taskInp.placeholder = "Enter Task Name";
       taskInp.focus();
       
       var btnCheck = document.createElement("img");
       taskDiv.appendChild(btnCheck);
       btnCheck.id = "saveTskName";
       btnCheck.classList.add("btn", "btn-default", "saveBtn");
       btnCheck.src = "./images/Button_CHECK_45x45_green.png";

       var btnTimer = document.createElement("img");
       taskDiv.appendChild(btnTimer);
       divRow.id = "task" + allTasks.length;
       btnTimer.classList.add("btn", "btn-default", "tmrBtn");
       btnTimer.src = "./images/Button_TIMER_45x45_orange.png";
       btnTimer.id = allTasks.length;

       allTasks.push({
           timer:"timer"+btnTimer.id,
           parent: divRow    
       })       
       
       
       btnTimer.onclick = function(){         
           divBox.style.visibility = "hidden"; 
           divBox.style.display = "none"; 
           var btnId = this.id;
           
           
           $.ajax({
              url:"OD_timerpage.html",
              dataType:"html",
              type:"get",
              success:function(resp){
                  var newdiv=document.createElement("div");
                  document.body.appendChild(newdiv);
                  document.getElementById("fdlnew").style.visibility = "hidden";
                  newdiv.innerHTML = resp;
                  
                  $('.form_datetime').datetimepicker({
                        //language:  'fr',
                        weekStart: 1,
                        todayBtn:  1,
                        autoclose: 1,
                        todayHighlight: 1,
                        startView: 2,
                        forceParse: 0,
                        showMeridian: 1
                  });
                  
                  var timerDone = document.getElementById("timerDone");
                
                  timerDone.onclick = function(){                                         document.getElementById("fdlnew").style.visibility = "";
                        divBox.style.visibility = "";     
                        divBox.style.display = "";
                        document.body.removeChild(newdiv);
                         
                      
                        var tskOption = document.getElementById("timer"+btnId);
                      
                        if(tskOption == null){
      
                                var tskOption = document.createElement("div");
                                tskOption.id = "timer"+btnId;
                                allTasks[btnId].parent.appendChild(tskOption);

                                tskOption.className = "tskOpt";
                                //tskOption.id = "tskoption";
                                tskOption.classList.add("col-xs-12");
                            
                                var tskStart = document.createElement("div");
                                var tskS = document.createElement("img");
                                tskStart.appendChild(tskS);
                                tskS.src = "./images/Button_PLAY_45x45_blue.png";
                                tskOption.appendChild(tskStart);

                                tskStart.className = "setBtn";
                                tskStart.classList.add("btn");
                                tskStart.classList.add("btn-default");
                                tskStart.id = "tskStart";
                                tskS.classList.add("medB");

                                var tskStop = document.createElement("div");
                                var tskT = document.createElement("img");
                                tskT.src = "./images/Button_PAUSE_45x45.png";
                                tskStop.id = "tskPause";
                                tskStop.className = "setBtn";
                                tskStop.classList.add("btn");
                                tskStop.classList.add("btn-default");
                                tskT.classList.add("medB");
                                tskOption.appendChild(tskStop);
                                tskStop.appendChild(tskT);

                                var tskReset = document.createElement("div");
                                var tskR = document.createElement("img");
                                tskR.src = "./images/Button_RESET_45x45.png";
                                tskReset.id = "tskReset";
                                tskReset.className = "setBtn";
                                tskReset.classList.add("btn");
                                tskReset.classList.add("btn-default");
                                tskR.classList.add("medB");
                                tskOption.appendChild(tskReset);
                                tskReset.appendChild(tskR);


                                var tskDone = document.createElement("div");
                                var tskD = document.createElement("img");

                                tskD.src = "./images/Button_RESET_45x45.png";
                                tskDone.id = "tskcomplete";
                                tskDone.className = "btn";
                                tskDone.classList.add("btn-default");
                                tskDone.classList.add("setBtn");
                                tskDone.classList.add("comp");
                                tskD.className = "compB";
                                tskOption.appendChild(tskDone);
                                tskDone.appendChild(tskD);
                                tskOption.style.zIndex = "-100";
                                //$(tskOption).animate({marginTop:"-68px"},3000);

                                divRow.appendChild(tskOption);                   //}
                                newTask.style.visibility = "";
                                var cover = document.createElement("div");
                                cover.style.cssText ="height:70px;width:290px;backgroundColor:#000000;zIndex:1000;position:absolute;";
                                cover.style.marginTop = "-13%";
                                cover.id="differ";
                       
                      }
                      
                     
                    }
                  
                  
              } 
               
            }); 
               
           
           }
       
        
       
       btnTimer.style.visibility = "hidden";
       
       btnCheck.onclick = function(){
            btnTimer.style.visibility = "";  
       }      
   
   }
   
}

