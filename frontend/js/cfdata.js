var API = "https://codeforces.com/api/" ;
$(document).ready(function()
{
    $("#form").show() ;
    $("#details").hide() ;
    $("#get").click(function()
    {
        var H = $("#handle").val() ;
        if(!H) 
        {
            alert("Enter a value") ;
            return ;
        }
        else 
        {
            $("#form").hide() ;
            $("#details").show() ;
            var api = API + "user.info?handles=" + H ;
            console.log(api) ;
            $.get(api, function(data, status)
            {
                var x = "<h1> Hello! " + H + "</h1>" ;
                document.getElementById("Greet").innerHTML = x ;
                api = API + "user.status?handle=" + H ;
                console.log(api) ;
                $.get(api, function(data, status)
                {
                    var verdicts = {} ;
                    var lang = {} ;
                    for(var i = 0 ; i < data.result.length ; i++)
                    {
                        if(verdicts[data.result[i].verdict] === undefined)
                        verdicts[data.result[i].verdict] = 0 ;
                        verdicts[data.result[i].verdict]++ ;
                        if(lang[data.result[i].programmingLanguage] === undefined)
                        lang[data.result[i].programmingLanguage] = 0 ; 
                        lang[data.result[i].programmingLanguage]++ ;
                    }
                    x = "The Verdicts of " + H + "<br> &nbsp &nbsp";
                    x += "<table width = 25%>" ;
                    x += "<tr><th>Verdict</th><th>Count</th></tr>" ;
                    var inword = false, innum = false ;
                    var ver = "" ;
                    var cnt = "" ;
                    var JSN = JSON.stringify(verdicts);
                    for(var i = 0 ; i < JSN.length ; i++)
                    {
                        if(JSN[i] == "\"")
                        {
                            if(!inword)
                            x += "<tr>" ; 
                            inword ^= true ;
                            if(ver != "")
                            {
                                x += "<td class = \"bor\" >" + ver + "</td>" ;
                                ver = "" ;
                            }
                        }
                        else if(JSN[i] == ":") innum = true ;
                        else if(JSN[i] == "," || JSN[i] == "}")
                        {
                            innum = false ;
                            x += "<td class = \"bor\" >" + cnt + "</td></tr>" ;
                            cnt = "" ;
                        }
                        else if(innum) cnt += JSN[i] ;
                        else if(inword) ver += JSN[i] ;
                    }
                    x += "</table>" ;
                    document.getElementById("ver").innerHTML = x ;
                    x = "" ;

                    x = "The Languages of " + H + "<br> &nbsp &nbsp";
                    x += "<table width = 25%>" ;
                    x += "<tr><th>Language</th><th>Count</th></tr>" ;
                    var inword = false, innum = false ;
                    var ver = "" ;
                    var cnt = "" ;
                    var JSN = JSON.stringify(lang);
                    for(var i = 0 ; i < JSN.length ; i++)
                    {
                        if(JSN[i] == "\"")
                        {
                            if(!inword)
                            x += "<tr>" ; 
                            inword ^= true ;
                            if(ver != "")
                            {
                                x += "<td class = \"bor\" >" + ver + "</td>" ;
                                ver = "" ;
                            }
                        }
                        else if(JSN[i] == ":") innum = true ;
                        else if(JSN[i] == "," || JSN[i] == "}")
                        {
                            innum = false ;
                            x += "<td class = \"bor\" >" + cnt + "</td></tr>" ;
                            cnt = "" ;
                        }
                        else if(innum) cnt += JSN[i] ;
                        else if(inword) ver += JSN[i] ;
                    }
                    x += "</table>" ;
                    document.getElementById("lang").innerHTML = x ;
                    x = "" ;
                }).fail(function(xhr, status)
                {
                    alert("Error Ocuured!!") ;
                    $("#form").show() ;
                    $("#details").hide() ;
                    return ;
                }) ;
            }).fail(function(xhr, status)
            {
                alert("User Not Found!!") ;
                $("#form").show() ;
                $("#details").hide() ;
                return ;
            }) ;
        }
    });
}) ;