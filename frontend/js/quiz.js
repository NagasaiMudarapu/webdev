$(document).ready(function()
{
    $("#Q1").hide();
    $("#Q2").hide();
    $("#Q3").hide();
    $("#Q4").hide();
    $("#Q5").hide();
    $("#Results").hide();
    $("#start").click(function()
    {
        var score = 0 ;
        var name = $("#name").val();
        if(!name)
        alert("Name is required");
        else 
        {
            $("#ind").hide();
            $("#Q1").show();
            $("#Q1Abtn").click(function()
            {
                    
                document.getElementById('Q1Bbtn').style.backgroundColor = 'Green' ;
                document.getElementById('Q1Abtn').disabled = true ;
                document.getElementById('Q1Bbtn').disabled = true ;
                document.getElementById('Q1Cbtn').disabled = true ;
                document.getElementById('Q1Dbtn').disabled = true ;
            }) ;
            $("#Q1Cbtn").click(function()
            {
                document.getElementById('Q1Cbtn').style.backgroundColor = 'Red';
                document.getElementById('Q1Bbtn').style.backgroundColor = 'Green' ;
                document.getElementById('Q1Abtn').disabled = true ;
                document.getElementById('Q1Bbtn').disabled = true ;
                document.getElementById('Q1Cbtn').disabled = true ;
                document.getElementById('Q1Dbtn').disabled = true ;
            }) ;
            $("#Q1Dbtn").click(function()
            {
                document.getElementById('Q1Dbtn').style.backgroundColor = 'Red';
                document.getElementById('Q1Bbtn').style.backgroundColor = 'Green' ;
                document.getElementById('Q1Abtn').disabled = true ;
                document.getElementById('Q1Bbtn').disabled = true ;
                document.getElementById('Q1Cbtn').disabled = true ;
                document.getElementById('Q1Dbtn').disabled = true ;
            }) ;
            $("#Q1Bbtn").click(function()
            {
                document.getElementById('Q1Bbtn').style.backgroundColor = 'Green' ;
                score++ ;
                document.getElementById('Q1Abtn').disabled = true ;
                document.getElementById('Q1Bbtn').disabled = true ;
                document.getElementById('Q1Cbtn').disabled = true ;
                document.getElementById('Q1Dbtn').disabled = true ;
            }) ;
            
            $("#1nxt").click(function()
            {
                $("#Q1").hide();
                $("#Q2").show();    
                $("#Q2Abtn").click(function()
                {
                    document.getElementById('Q2Abtn').style.backgroundColor = 'Red';
                    document.getElementById('Q2Bbtn').style.backgroundColor = 'Green' ;
                    document.getElementById('Q2Abtn').disabled = true ;
                    document.getElementById('Q2Bbtn').disabled = true ;
                    document.getElementById('Q2Cbtn').disabled = true ;
                    document.getElementById('Q2Dbtn').disabled = true ;
                }) ;
                $("#Q2Cbtn").click(function()
                {
                    document.getElementById('Q2Cbtn').style.backgroundColor = 'Red';
                    document.getElementById('Q2Bbtn').style.backgroundColor = 'Green' ;
                    document.getElementById('Q2Abtn').disabled = true ;
                    document.getElementById('Q2Bbtn').disabled = true ;
                    document.getElementById('Q2Cbtn').disabled = true ;
                    document.getElementById('Q2Dbtn').disabled = true ;
                }) ;
                $("#Q2Dbtn").click(function()
                {
                    document.getElementById('Q2Dbtn').style.backgroundColor = 'Red';
                    document.getElementById('Q2Bbtn').style.backgroundColor = 'Green' ;
                    document.getElementById('Q2Abtn').disabled = true ;
                    document.getElementById('Q2Bbtn').disabled = true ;
                    document.getElementById('Q2Cbtn').disabled = true ;
                    document.getElementById('Q2Dbtn').disabled = true ;
                }) ;
                $("#Q2Bbtn").click(function()
                {
                    document.getElementById('Q2Bbtn').style.backgroundColor = 'Green' ;
                    score++ ;
                    document.getElementById('Q2Abtn').disabled = true ;
                    document.getElementById('Q2Bbtn').disabled = true ;
                    document.getElementById('Q2Cbtn').disabled = true ;
                    document.getElementById('Q2Dbtn').disabled = true ;
                }) ;
                $("#2nxt").click(function()
                {
                    $("#Q2").hide();
                    $("#Q3").show();
                    $("#Q3Abtn").click(function()
                    {
                        document.getElementById('Q3Abtn').style.backgroundColor = 'Red';
                        document.getElementById('Q3Cbtn').style.backgroundColor = 'Green' ;
                        document.getElementById('Q3Abtn').disabled = true ;
                        document.getElementById('Q3Bbtn').disabled = true ;
                        document.getElementById('Q3Cbtn').disabled = true ;
                        document.getElementById('Q3Dbtn').disabled = true ;
                    }) ;
                    
                    $("#Q3Bbtn").click(function()
                    {
                        document.getElementById('Q3Bbtn').style.backgroundColor = 'Red';
                        document.getElementById('Q3Cbtn').style.backgroundColor = 'Green' ;
                        document.getElementById('Q3Abtn').disabled = true ;
                        document.getElementById('Q3Bbtn').disabled = true ;
                        document.getElementById('Q3Cbtn').disabled = true ;
                        document.getElementById('Q3Dbtn').disabled = true ;
                    }) ;
                    $("#Q3Dbtn").click(function()
                    {
                        document.getElementById('Q3Dbtn').style.backgroundColor = 'Red';
                        document.getElementById('Q3Cbtn').style.backgroundColor = 'Green' ;
                        document.getElementById('Q3Abtn').disabled = true ;
                        document.getElementById('Q3Bbtn').disabled = true ;
                        document.getElementById('Q3Cbtn').disabled = true ;
                        document.getElementById('Q3Dbtn').disabled = true ;
                    }) ;
                    $("#Q3Cbtn").click(function()
                    {
                        score++;
                        document.getElementById('Q3Cbtn').style.backgroundColor = 'Green' ;
                        document.getElementById('Q3Abtn').disabled = true ;
                        document.getElementById('Q3Bbtn').disabled = true ;
                        document.getElementById('Q3Cbtn').disabled = true ;
                        document.getElementById('Q3Dbtn').disabled = true ;
                    }) ;
                    $("#3nxt").click(function()
                    {
                        $("#Q3").hide();
                        $("#Q4").show();
                        $("#Q4Abtn").click(function()
                        {
                            document.getElementById('Q4Abtn').style.backgroundColor = 'Red';
                            document.getElementById('Q4Dbtn').style.backgroundColor = 'Green' ;
                            document.getElementById('Q4Abtn').disabled = true ;
                            document.getElementById('Q4Bbtn').disabled = true ;
                            document.getElementById('Q4Cbtn').disabled = true ;
                            document.getElementById('Q4Dbtn').disabled = true ;
                        }) ;
                        $("#Q4Bbtn").click(function()
                        {
                            document.getElementById('Q4Bbtn').style.backgroundColor = 'Red';
                            document.getElementById('Q4Dbtn').style.backgroundColor = 'Green' ;
                            document.getElementById('Q4Abtn').disabled = true ;
                            document.getElementById('Q4Bbtn').disabled = true ;
                            document.getElementById('Q4Cbtn').disabled = true ;
                            document.getElementById('Q4Dbtn').disabled = true ;
                        }) ;
                        $("#Q4Cbtn").click(function()
                        {
                            document.getElementById('Q4Cbtn').style.backgroundColor = 'Red';
                            document.getElementById('Q4Dbtn').style.backgroundColor = 'Green' ;
                            document.getElementById('Q4Abtn').disabled = true ;
                            document.getElementById('Q4Bbtn').disabled = true ;
                            document.getElementById('Q4Cbtn').disabled = true ;
                            document.getElementById('Q4Dbtn').disabled = true ;
                        }) ;
                        $("#Q4Dbtn").click(function()
                        {
                            score++;
                            document.getElementById('Q4Dbtn').style.backgroundColor = 'Green' ;
                            document.getElementById('Q4Abtn').disabled = true ;
                            document.getElementById('Q4Bbtn').disabled = true ;
                            document.getElementById('Q4Cbtn').disabled = true ;
                            document.getElementById('Q4Dbtn').disabled = true ;
                        }) ;
                        $("#4nxt").click(function()
                        {
                            $("#Q4").hide();
                            $("#Q5").show();    
                            $("#Q5Cbtn").click(function()
                            {
                                document.getElementById('Q5Cbtn').style.backgroundColor = 'Red';
                                document.getElementById('Q5Abtn').style.backgroundColor = 'Green' ;
                                document.getElementById('Q5Abtn').disabled = true ;
                                document.getElementById('Q5Bbtn').disabled = true ;
                                document.getElementById('Q5Cbtn').disabled = true ;
                                document.getElementById('Q5Dbtn').disabled = true ;
                            }) ;
                            
                            $("#Q5Bbtn").click(function()
                            {
                                document.getElementById('Q5Bbtn').style.backgroundColor = 'Red';
                                document.getElementById('Q5Abtn').style.backgroundColor = 'Green' ;
                                document.getElementById('Q5Abtn').disabled = true ;
                                document.getElementById('Q5Bbtn').disabled = true ;
                                document.getElementById('Q5Cbtn').disabled = true ;
                                document.getElementById('Q5Dbtn').disabled = true ;
                            }) ;
                            $("#Q5Dbtn").click(function()
                            {
                                document.getElementById('Q5Dbtn').style.backgroundColor = 'Red';
                                document.getElementById('Q5Abtn').style.backgroundColor = 'Green' ;
                                document.getElementById('Q5Abtn').disabled = true ;
                                document.getElementById('Q5Bbtn').disabled = true ;
                                document.getElementById('Q5Cbtn').disabled = true ;
                                document.getElementById('Q5Dbtn').disabled = true ;
                            }) ;
                            $("#Q5Abtn").click(function()
                            {
                                score++;
                                document.getElementById('Q5Abtn').style.backgroundColor = 'Green' ;
                                document.getElementById('Q5Abtn').disabled = true ;
                                document.getElementById('Q5Bbtn').disabled = true ;
                                document.getElementById('Q5Cbtn').disabled = true ;
                                document.getElementById('Q5Dbtn').disabled = true ;
                            }) ;
                            $("#5nxt").click(function()
                            {
                                $("#Q5").hide();
                                $("#Results").show();
                                document.getElementById("usr").innerHTML = "Hello! " + name ;
                                document.getElementById("score").innerHTML = "Your Score is " + score + "/5" ;
                            });
                        });
                    });
                });
            });
        }
    });
});