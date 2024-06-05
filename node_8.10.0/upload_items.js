/*
	Copyright @2019 [Amazon Web Services] [AWS]

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/


var
    AWS = require("aws-sdk"),
    S3API = new AWS.S3({
        apiVersion: "2006-03-01",
        region: "us-east-1"
    }),
    FS = require("fs"),
    bucket_name_str = "2024-06-04-gatoperdido";


function uploadItemAsBinary(key_name_str, content_type_str, bin){
    var params = {
      Bucket: bucket_name_str,
      Key: key_name_str,
      Body: bin,
      ContentType: content_type_str,
      CacheControl: "max-age=0"
      
    };
    S3API.putObject(params, function(error, data){
       console.log(error, data) 
    }); 
}

(function init(){
    var cat_pic_bin = FS.readFileSync("../cat.jpg");
    uploadItemAsBinary("cat.jpg", "image/jpg", cat_pic_bin);
    var index_page_bin = FS.readFileSync("../index.html");
    uploadItemAsBinary("index.html", "text/html", index_page_bin);
})();
