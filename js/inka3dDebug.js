// debug print functions

// write a value
inka3d.writeValue = function (name, a)
{
	document.writeln(name + " " + a + "<br>");
};

// write an array
inka3d.writeArray = function (name, a)
{
	document.writeln(name + "<br>");
	for (var i = 0; i < a.length; ++i)
		document.writeln(i + ": " + a[i] + "<br>");
};


// overridden functions with console error logging
inka3d.createVertexShader = function (code, name)
{
	var shader = gl.createShader(gl.VERTEX_SHADER);	
	gl.shaderSource(shader, code);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
	{
		console.log("error in vertex shader '" + name + "': " + gl.getShaderInfoLog(shader));
	}
	return shader;
},

inka3d.createPixelShader = function (code, name)
{
	var shader = gl.createShader(gl.FRAGMENT_SHADER);	
	gl.shaderSource(shader, code);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
	{
		console.log("error in pixel shader '" + name + "': " + gl.getShaderInfoLog(shader));
	}
	return shader;
},

inka3d.getIntVector = function (name, length, infos, istate)
{
	var info = infos[name];
	if (!info)
	{
		console.log("parameter '" + name + "' not found");
		return new Int32Array(length);
	}
	if (info.t != 0)
	{
		console.log("parameter '" + name + "' ist not integer type");
		return new Int32Array(length);
	}
	if (length > info.e - info.b)
	{
		console.log("parameter '" + name + "' too short for requested length of " + length);
		return new Int32Array(length);
	}
	return istate.subarray(info.b, info.e);
};

inka3d.getIntArray = function (name, infos, istate)
{
	var info = infos[name];
	if (!info)
	{
		console.log("parameter '" + name + "' not found");
		return null;
	}
	if (info.t != 0)
	{
		console.log("parameter '" + name + "' ist not integer type");
		return null;
	}
	return istate.subarray(info.b, info.e);
};

inka3d.getFloatVector = function (name, length, infos, fstate)
{
	var info = infos[name];
	if (!info)
	{
		console.log("parameter '" + name + "' not found");
		return new Float32Array(length);
	}
	if (info.t != 1)
	{
		console.log("parameter '" + name + "' ist not float type");
		return new Float32Array(length);
	}
	if (length > info.e - info.b)
	{
		console.log("parameter '" + name + "' too short for requested length of " + length);
		return new Float32Array(length);
	}
	return fstate.subarray(info.b, info.e);
};

inka3d.getFloatArray = function (name, infos, fstate)
{
	var info = infos[name];
	if (!info)
	{
		console.log("parameter '" + name + "' not found");
		return null;
	}
	if (info.t != 1)
	{
		console.log("parameter '" + name + "' ist not float type");
		return null;
	}
	return fstate.subarray(info.b, info.e);
};

inka3d.getTexture = function (name, index, infos, ostate)
{
	var info = infos[name];
	if (!info)
	{
		console.log("parameter '" + name + "' not found");
		return null;
	}
	if (info.t != 2)
	{
		console.log("parameter '" + name + "' ist not texture type");
		return null;
	}
	var i = index || 0;
	if (i < 0 || i >= info.l)
	{
		console.log("parameter '" + name + "' has length " + info.l + ", index " + index + " out of range");
		return null;
	}
	return ostate[info.b + i];
};

inka3d.setTexture = function (name, texture, index, infos, ostate)
{
	var info = infos[name];
	if (!info)
	{
		console.log("parameter '" + name + "' not found");
		return;
	}
	if (info.t != 2)
	{
		console.log("parameter '" + name + "' ist not texture type");
		return;
	}
	var i = index || 0;
	if (i < 0 || i >= info.l)
	{
		console.log("parameter '" + name + "' has length " + info.l + ", index " + index + " out of range");
		return;
	}
	ostate[info.b + i] = texture;
};
