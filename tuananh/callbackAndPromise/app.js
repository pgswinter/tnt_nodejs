
// CASE 1: Callback normal way. Callback hell

function start(cb){
	console.log('waiting...')
	cb();
}

function wait(cb){
	console.log('calling wait function')
	cb();
}

function done(cb){
	setTimeout(function(){
		console.log('done waiting')	
	}, 1000)
	cb();
}

function end(cd){
	console.log('finish')
}

start(function(){
	wait(function(){
		done(function(){
			end()
		})
	})
})

// CASE 2: Clean callback code

var wait = function(delay, cb){
	console.log('waiting...');
	setTimeout(function(){
		console.log('done waiting');
		cb();
	},delay)
}

var start = function(){
	console.log('calling wait function');
	wait(1000,end)
}

var end = function(){
	console.log('finished waiting');
}

start()

// CASE 3: Use PROMISE

var wait = function(delay){
	console.log('waiting...................');
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			console.log('done waiting');
			if(delay===1000){
				resolve();	
			}
			else{
				reject();
			}
		},delay);
	});
}

var start = function(){
	console.log('calling wait function');
	wait(1000).then(end)
	// wait(500).then(end)
}

var end = function(){
	console.log('finished waiting')
}

start()