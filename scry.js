function (context, args){ // t:#s.aon.public
    
	var t = args.t;
	
	
	var gl = #fs.scripts.get_level({name:t.name});
	
	if(gl != 4)
	{
		return {ok:false, msg:"`Spell countered, target insecure`"}
	}
	
	var r = t.call();
	var r2 = r;
	var m1 = r.match(/(\w+) \| (\w+)/);
	
    r = t.call({});
	var m2 = r.match(/ith (\w+):"(\w+)"$/);
	
	var z = "";
	if(m1 && m2)
	{
		var o = {};
		o[m2[1]] = m1[2];
		r = t.call(o);
		var m3 = r.match(/tegy (\w+)/);
		
		
		
		if(m3)
		{
			var pkl = ["p", "pass", "password"];
			for(var pk in pkl)
			{
				o[m2[1]] = m1[2];
				o[pkl[pk]] = m3[1]
				r = t.call(o);
				if(r.indexOf('Authenticated') > -1)
					break;
			}
			
			o[m2[1]] = m1[1];
			r = t.call(o);
			var pm = "";
			var um = "";
			for (var fp in r)
			{
				var m4 = r[fp].match(/([a-zA-Z][\w]+\.[a-zA-Z][\w]+)/);//([\w.]+)/);
				if(m4)
				{
					o[m2[1]] = m2[2];
					o['project'] = m4[1];
					r2 = t.call(o);
					pm = pm + m4[1] + "\n"// + " `1Res`: " +(typeof r2)+ "\n"
					for(var fs in r2)
					{
						var m5 = r2[fs].match(/^([\w]+\.[\w]+)$/);
						if(m5)
						{
							um = um + r2[fs] + "\n"
						}
					}
				}
			}
			if(!um){ return {ok:false, msg:"Interference blocks your way, try again"}}
			else{
			//const [payToken, message] = #fs.wiz.spellbound({ action: "prepare", owner:"tonton", cost:1 }) 
			//	if(message) return message; 
				// do action and confirm 
			//	#fs.wiz.spellbound({ action: "charge", token: payToken })
			z = "`7Your scrying has revealed the following enemies`:\n\n" + um + "\n`7And their schemes`:\n\n" + pm
			}
		}
		return z
	} else
	{
		return {ok:false, msg:"The corruption blocks your attempts, try again."}
	}   
}