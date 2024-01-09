var score=0;//set score to 0
var total=10;// total number of question
var point=1;// point per correct answer
var hightest=total*point;
var x;
var i;
var t=0;

  //Initializer
  function init()
  {
	  //set correct answer
	  sessionStorage.setItem('a1','b');
	  sessionStorage.setItem('a2','a');
	  sessionStorage.setItem('a3','c');
	  sessionStorage.setItem('a4','b');
	  sessionStorage.setItem('a5','c');
	  sessionStorage.setItem('a1','b');
	  sessionStorage.setItem('a2','a');
	  sessionStorage.setItem('a3','c');
	  sessionStorage.setItem('a4','b');
	  sessionStorage.setItem('a5','c');
	  sessionStorage.setItem('a6','b');
	  sessionStorage.setItem('a7','a');
	  sessionStorage.setItem('a8','c');
	  sessionStorage.setItem('a9','b');
	  sessionStorage.setItem('a10','c');
	  
  }
	  

$(document).ready(function(){
	//Hide all question
	  $('.questionForm').hide();
	//Show first question
	  $('#q1').show();
	  
	//Question Next
$('.questionForm #submit').click(function()
      {
		//Get data attributes
        current=$(this).parent('form:first').data('question');
        next=$(this).parent('form:first').data('question')+1;
		//hide a question
		$('.questionForm').hide();
		//show next question
		$('#q'+next+'').fadeIn(300);
		process(''+current+'');
		if(next==11)
		{
			$('#q1').show();
		}
		return false;
       		
	  });
	//Question previous
$('.questionForm #previous').click(function()
      {
		//Get data attributes
        current=$(this).parent('form:first').data('question');
        pre=$(this).parent('form:first').data('question')-1;
		//hide a question
		$('.questionForm').hide();
		//show previous question
		$('#q'+pre+'').fadeIn(300);
		process(''+current+'');
		if(pre==0)
		{
			$('#q10').show();
		}
		return false;
       		
	  });
	  
});

//Wrong///////////////////////////////////////////wrong/////////////////////////////////////////////////////
//process the answer
	function process(n)
	{
		//get input value
		var submitted=$('input[name=q'+n+']:checked').val();
		if(submitted==sessionStorage.getItem('a'+n+''))
			{
				//score=score+point;
			}
		
		
		
		
		if(n==total)
		{
			
			//$('#results').html('<h3>Your final score is: '+score+' out of '+hightest+'</h3> <a href="paper.html"> take quiz again</a>');
		}
		return false;
		
	}	
//wrong/////////////////////////////////////////////////////////////wrong/////////////////////////////////////////////////


//add event listener
 window.addEventListener('load',init,false);
 
// clicked Question color change
  
function f1(x)
{ var j;
 for(i=1;i<=10;i=i+1)
 {
	 if(i==x )
	 {   
		document.getElementById('q'+i+'').style.display='block';
        document.getElementById('a'+i+'').style.backgroundColor = '#3a5909';	
        document.getElementById('a'+i+'').style.color = white;
		

	 }
	
	 else
	 {
		 document.getElementById('q'+i+'').style.display='none';
		 
	 }
 }
}

// Show Question (jump on the question)
  
function f2(x)
{ var j;
 for(i=1;i<=10;i=i+1)
 {
	 if(i==x )
	 {   
		document.getElementById('q'+i+'').style.display='block';	

	 }
	
	 else
	 {
		 document.getElementById('q'+i+'').style.display='none';
		 
	 }
 }
}


// marked Question  for review
  
function f3(x)
{ var j;
 for(i=1;i<=10;i=i+1)
 {
	 if(i==x )
	 {   
		document.getElementById('q'+i+'').style.display='block';
        document.getElementById('a'+i+'').style.backgroundColor = 'purple';	
		


	 }
	
	 else
	 {
		 document.getElementById('q'+i+'').style.display='none';
		 
	 }
 }
}




/*function finish1()
{
	$('#results').html('<h3>Your final score is: '+score+' out of '+hightest+'</h3> <a href="paper.html"> take quiz again</a>');
}*/

//process the answer of a question;
	function f4()
	{ 
	  var n;
	  
		for(n=1;n<=10;n++)
		{
		//get input value
		var submitted=$('input[name=q'+n+']:checked').val();
		if(submitted==sessionStorage.getItem('a'+n+''))
			{
				score=score+point;
			}
		
        else
		   {
			   score=score+0; 
		   }		
		}
		if(t==0)
		{
			t=t+1;
			$('#results').html('<h3>Your final score is: '+score+' out of '+hightest+'</h3> <a href="paper.html"></a>')
		}

		return false;
		
	}