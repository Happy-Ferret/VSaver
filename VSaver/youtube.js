var videoUrls = {};
ytplayer.config.args.url_encoded_fmt_stream_map.split(',').forEach(function (item) {
                                                                   var obj = {};
                                                                   
                                                                   item.split('&').forEach(function (param) {
                                                                                           param = param.split('=');
                                                                                           obj[param[0]] = decodeURIComponent(param[1]);
                                                                                           });
                                                                   
                                                                   videoUrls[obj.itag] = obj;
                                                                   });
var valid_itags = ["95", "299", "266", "137", "22", "136", "135", "134", "18", "133", "160"]
var url = ""
valid_itags.forEach(function(itag) {
                    if (videoUrls[itag] != null) {
                    url = videoUrls[itag].url
                    return
                    }
                    })
url // return value