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
    });                         

(function createBucket(){
	var
        params = {
            //USE YOUR BUCKET NAME HERE
            Bucket: "2024-06-04-gatoperdido", 
        };
        S3API.createBucket(params, function(error, data){
            console.log(error, data);
        });
        //no need to pass the location constraint
        //for creating a bucket in us-east-1
        //as you are already using us-east-1 client
})();