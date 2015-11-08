

        $(document).ready(function() {


            getUserProfileInfo();

            function getUserProfileInfo() {

                $.ajax({
                    url: "php/AJAX-GET-session.php",
                    type: "GET",
                    dataType: "JSON",
                    //data: {}, // could use this to ask for specific pieces of information (e.g., user profile, friends list, etc)
                    success: function(resultData) {
                        console.log("Session GET returned: ", resultData);

                        var status = resultData['status'];
                        if(status == 'success') {

                            var userProfileData = "";
                            for(var key in resultData) {
                                if(key != 'status') {
                                    userProfileData += key + ":" + resultData[key] + " ";
                                }
                            }
                            $("#infoMsg").text(userProfileData);

                            window.location.href = "OD_folderpage.html";

                        } else {
                        
                        }

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });

            }


            $("#loginMain").click(function() {
                //console.log($("#lastName").val());
                var formData = ConvertFormToJSON("#loginForm");
                console.log("Login data to send: ", formData);

                $.ajax({
                    url: "php/AJAX-login-session.php",
                    type: "POST",
                    dataType: "JSON",
                    data: formData,
                    success: function(data) {
                        console.log("Login data returned: ", data);

                        var status = data['status'];
                        if(status == 'fail') {
                            $("#errorMsg").html(data['msg']);
                            $("#errorMsg").css({"text-align": "center", "margin-top": "-11.5%", 'color': 'white'});
                        } else {
                            // get user data
                            getUserProfileInfo();
                            $('#loginForm').trigger("reset");

                        }
//{'color': 'white','background-color': '#CC0000', 'text-align': 'center', 'padding': '2%'}
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        //console.log(jqXHR.statusText, textStatus, errorThrown);
                        console.log(jqXHR.statusText, textStatus);
                    }
                });

                // from: http://www.developerdrive.com/2013/04/turning-a-form-element-into-json-and-submiting-it-via-jquery/
                function ConvertFormToJSON(form){
                    var array = $(form).serializeArray();
                    var json = {};

                    jQuery.each(array, function() {
                        // don't send 'undefined'
                        json[this.name] = this.value || '';
                    });
                    return json;
                }

            });


        });

  