<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Ajax jQuery fetch</title>
    <style type="text/css">
    body{
        font-family: Verdana, Geneva, sans-serif;
    }
    .container{
    background: white;
    border: 10px;
    }

    table, tr, th, td{
        border: 1px solid black;
        padding: 10px;
    }
    .box1{
        color: black;
        display: inline-block;
        background: black;
        margin-top:10px;
        margin-bottom: 10px;
        padding: 20px;
    }
   
    .sb{
        padding-top: 20px;
    }

   
    </style>
</head>
<body>
<div class = "container">

    <div class="row">
            <div class="box box1 col-xs-12">
                <ul>
                    <li><a href="http://localhost:8080/FinalProject-Playground/landing-page/index1.html">Home</a></li>
                </ul>
            </div>
    </div>

        <div class="row">
            <div class="box2 col-xs-12">
                <div id="records1">
                    <img src="loading.png"/>
                </div>
            </div>
        </div>

        
        <div class = "row">
            <div class = "box3 col-xs-6 header">
                <h1>Get Contact info of your ACTIVITY partner</h1>
            </div>
            <div class = "formpost box3 col-xs-6 header">
            <div class="searchpanel">
                <div class="sb"><input type="text" class="searchbox" name="id" id="id" placeholder="Enter Course number"></div>
                <div class="btn"><input type="submit" class="searchbtn" name="searchdata" id="searchdata" value="SEARCH"></div>
            </div>
            </div>
        </div>
        <div class = "row">
            <div class = "box4 col-xs-4"></div>
            <div class = "box5 col-xs-4">
                <form id="vikformid" method="post"></form>
            </div>
            <div class = "box6 col-xs-4"></div>
        </div>
    </div>
</div>
    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script type="text/javascript">  
    $(document).ready(function(){
        $('#searchdata').click(function(e){
            e.preventDefault();

            var id = $('input[name=id]').val();
            $.ajax({
                type: "POST",
                url: "fetching.php",
                data: {
                    "search_post_btn": 1,
                    "id":id,
                },
                dataType: "text",
                success: function(response){
                    $("#vikformid").html(response);
                }
            })
        });
    });

 $(document).ready(function () {
    ajax_call = function() {
        $.ajax({type: "GET", url: "getrecords.php", }).done(function(data){
            var result = $.parseJSON(data);
            var string='<table width="100%"><tr><th>#</th><th>Activity Name</th></tr>';
            $.each( result, function( key, value ) { 
             string += "<tr> <td>"+value['A_id'] + "</td><td> " +value['A_Name']+ "</td></tr>"; }); 
             string += '</table>'; 
             $("#records1").html(string);
        })
    };
    var interval = 3000;
    setInterval(ajax_call, interval);
});
/*

*/
</script> 



</body>

</html>
