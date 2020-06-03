export default {

    getPrice:function (remarkp){
        let remark=remarkp.split(',')
        //console.log(remark);
        let priceArr=[],rentArr=[],depArr=[];
        for (let i=0;i<remark.length;i++) {
          //console.log(remark[i].replace(/[^]*:/,'').split('分'))
             priceArr.push(remark[i].replace(/[^]*:/,'').split('分')[0])
        }

        for(let i=0;i<priceArr.length;i++){
          if(i%2==0){
            rentArr.push(priceArr[i]/100)
          }else{
            depArr.push(priceArr[i]/100)
          }
        }

      return {'rentArr':rentArr,'depArr':depArr}

    },

    takeData:function(originalArr){
      let region=originalArr.slice(); 
      let renderObj={}
      for(let i=0;i<region.length;i++){
        for(let j=i+1;j<region.length;j++){
               //console.log(originalArr[i].areacode)
               if(region[i].areacode == region[j].areacode){
                     region.splice(j,1);
                     j--;
               }
        }
      }
      region.filter((item,key,arr)=>{
          renderObj[item.areacode]=[];
      })
     
      for(let key in renderObj){
        originalArr.map((item,i)=>{
            if(item.areacode==key){
              renderObj[key].push(item)
            }
        })
      }
       return renderObj;
    },
    computeDuration:function(startTime,endTime){
        let start=startTime.replace(/-/g,'/');
        let end=endTime.replace(/-/g,'/');
        //console.log(start,end);
        let duration=new Date(end).getTime()-new Date(start).getTime(); //毫秒
        //console.log(duration);
        let days=Math.floor(duration/1000/60/60/24);
        //console.log(days)
        let hours=Math.floor(duration%(1000*60*60*24)/1000/60/60);
        //console.log(hours);
        let minutes=Math.floor(duration%(1000*60*60)/1000/60);
        //console.log(minutes); 
        let seconds=duration%(1000*60)/1000
        //console.log(seconds);
        if(days==0){
          return hours+'小时'+minutes+'分钟'+seconds+'秒';
        }else{
          return days+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒'
        }
    }
   
}
