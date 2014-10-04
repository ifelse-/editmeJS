

//############# Edit Me Funtion #################//	


$(document).on('click', '.editme', function() {
	  
	  
	//########### Vars
    var getText = $(this).text();
    var fieldId = $(this).attr('data-id');
    var selectName = $(this).attr('data-select-id');
    var textareaName = $(this).attr('data-textarea-id');
    var showValue = $(this).attr('data-show-value');
    var boxWidth = $(this).attr('data-box-width');


	//If editBox is already open close pervious box	
	if ($(".editBox")[0]){
       $(".editBox").parent().addClass('editme');
       $('.editBox').remove();
    }	
	
    //Remove editme class  
    $(this).removeClass('editme');
   
   
    if (showValue == "false") {
        getText = " "
    };
	///////////////// Input text only
    if ($(this).children().children().is("input, select, textarea") !=
        true) {
        if ($(this).attr('data-edit') == "") {
            $(this).append(
                "<div class='editBox'><input type='text' id='" +
                fieldId + "' name='" + fieldId + "' value=" +
                getText +
                "><button class='small button radius' id='sub'>Save</button><button class='small button radius' id='editme-close'><strong>X</strong></button></div> "
            );
            //Get new selected value and reset		  
            var selectedLetter = $('#breast_size2').text();
            $("#breastLetter option[value='" + selectedLetter + "']").attr(
                'selected', 'selected');
            $(".cup").text(" cup");
        }
		
	///////////////// Input text and Select
    if ($(this).attr('data-edit') == "select") {
		
			var jsonObjName = $(this).attr('data-json-object');
			var jsonPath = $(this).attr('data-json-url'); 
			//Hide Json Path
			var jsonObjName = $(this).attr('data-json-object');
			var output2 = []; 
					
			//If object name set on DOM run getJSON output2		
			if(jsonObjName){		
			 $.getJSON(jsonPath,function(data){
				$.each(data[jsonObjName], function( i, item ) {
					//alert(data.option[i].value);	
					output2.push('<option value="' + data.option[i].value + '">' +
                    data.option[i].text + '</option>');						 
					});
			 });     
			 }

            //Get select value
            var selectData = $(this).attr('data-option-arr');
            var selectDataArr = selectData.split(',');
            var output = [];
			
            $.each(selectDataArr, function(key, value) {
                output.push('<option value="' + key + '">' +
                    value + '</option>');
            });
            //Get select value END	
			
			var optionData;
			if(jsonObjName){
			optionData = output2;
				} else {
			optionData = output;		
					}

			//(jsonObjName) ? optionData = output2 : optionData = output
			
            $(this).delay(50).queue(function (next) {
              $(this).append( "<div class='editBox'><input type='text' id='" +
                fieldId + "' name='" + fieldId + "' value=" +
                getText + "><select id='" + selectName + "' name='" +
                selectName + "'>" + optionData.join('') +
                "</select><button class='small button radius signup-btn search-people-btn' id='sub'>Save</button><button class='small button radius' id='editme-close'><strong>X</strong></button></div> ");
    next();
});
			
			
            //Get new selected value and reset		  
            var selectedLetter = $('#breast_size2').text();
            $("#breastLetter option[value='" + selectedLetter + "']").attr(
                'selected', 'selected');
            $(".cup").text(" cup");
        }
		
	///////////////// Select only		
    if ($(this).attr('data-edit') == "select-only") {
            $(this).append("<div class='editBox'><select id='" +
                selectName + "' name='" + selectName +
                "'></select><button class='small button radius' id='sub'>Save</button><button class='small button radius' id='editme-close'><strong>X</strong></button></div> "
            );
            //Get new selected value and reset		    
            var selectedLetter = $('#breast_size2').text();
            var selectedHipSize = $('#hip_size').text();
            $("#breastLetter option[value='" + selectedLetter + "']").attr(
                'selected', 'selected');
            $("#hip_size option[value='" + selectedHipSize + "']").attr(
                'selected', 'selected');
            $(".cup").text(" cup");
        }
		
	///////////////// Textarea and Input text			
    if ($(this).attr('data-edit') == "textarea") {
            $(this).append(
                "<div class='editBox'><input type='text' id='" +
                fieldId + "' name='" + fieldId + "' value=" +
                getText + "><textarea id='" + textareaName +
                "' name='" + textareaName + "'>" + getText +
                "</textarea><button class='small button radius signup-btn search-people-btn' id='sub'>Save</button></div>"
            );
        }
		
	///////////////// Textarea only					
    if ($(this).attr('data-edit') == "textarea-only") {
            $(this).append("<div class='editBox'><textarea id='" +
                textareaName + "' name='" + textareaName + "'>" +
                getText +
                "</textarea><button class='small button radius signup-btn search-people-btn' id='sub'>Save</button></div>"
            );
        }
    }
    //Customize Edit Box		  
    if (boxWidth) {
        $('.editBox').width(boxWidth)
    };
}); 
//END CLICK FUNCTION
		  
		  
//############# Misc Function's #################//	

$(document).on('click', '#editme-close', function() {
    //Add editme class back to element
    $(this).parent().parent().addClass('editme');
    //Edit Box
    $('.editBox').remove();
});

$(document).on('click', '#sub', function() {
    $(this).text('Saving...')
});


function getDataSelect(path, obj) {
	
		 $.getJSON(path,function(data){
				$.each(data[obj], function( i, item ) {
					//alert(data.option[i].value);	
					output2.push('<option value="' + data.option[i].value + '">' +
                    data.option[i].text + '</option>');						 
					});
			 });     
			 
	
	}
		