var index2 =
{
	textures:
	{
		"_01_-_Default1noCulling":
		{
			initGlobal: function (global, texURL, ext, loaded)
			{
				var texture = global.texture = gl.createTexture();
				var image = global.image = new Image();
				image.onload = function ()
				{
					gl.bindTexture(gl.TEXTURE_2D, texture);
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
					gl.generateMipmap(gl.TEXTURE_2D);
					gl.bindTexture(gl.TEXTURE_2D, null);
					loaded();
				};
				image.src = texURL + '_01_-_Default1noCulling.jpg';
			},

			doneGlobal: function (global)
			{
				gl.deleteTexture(global.texture);
			},

			copy: function (global, ostate, b)
			{
				ostate[b] = global.texture;
			}
		},

		"_02_-_Default1noCulling":
		{
			initGlobal: function (global, texURL, ext, loaded)
			{
				var texture = global.texture = gl.createTexture();
				var image = global.image = new Image();
				image.onload = function ()
				{
					gl.bindTexture(gl.TEXTURE_2D, texture);
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
					gl.generateMipmap(gl.TEXTURE_2D);
					gl.bindTexture(gl.TEXTURE_2D, null);
					loaded();
				};
				image.src = texURL + '_02_-_Default1noCulling.jpg';
			},

			doneGlobal: function (global)
			{
				gl.deleteTexture(global.texture);
			},

			copy: function (global, ostate, b)
			{
				ostate[b] = global.texture;
			}
		},

		"_03_-_Default1noCulling":
		{
			initGlobal: function (global, texURL, ext, loaded)
			{
				var texture = global.texture = gl.createTexture();
				var image = global.image = new Image();
				image.onload = function ()
				{
					gl.bindTexture(gl.TEXTURE_2D, texture);
					gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
					gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
					gl.generateMipmap(gl.TEXTURE_2D);
					gl.bindTexture(gl.TEXTURE_2D, null);
					loaded();
				};
				image.src = texURL + '_03_-_Default1noCulling.jpg';
			},

			doneGlobal: function (global)
			{
				gl.deleteTexture(global.texture);
			},

			copy: function (global, ostate, b)
			{
				ostate[b] = global.texture;
			}
		}

	},

	scenes:
	{
		"index2":
		{
			shaders:
			{
				// mesh, shader '_01_FBXASC045_Default1noCulling'
				m___01__FBXASC045__Default1noCulling:
				{
					setShader: function(instance, resetShader)
					{
						var shader = instance.global.shaders.m___01__FBXASC045__Default1noCulling;
						if (resetShader != shader.resetShader)
						{
							resetShader();
							gl.useProgram(shader.program);
							gl.enableVertexAttribArray(0);
							gl.enableVertexAttribArray(1);
							gl.enableVertexAttribArray(2);
						}
						var uniform = instance.shaders.m___01__FBXASC045__Default1noCulling.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.activeTexture(gl.TEXTURE0);
						gl.bindTexture(gl.TEXTURE_2D, uniform._c);
					},

					resetShader: function()
					{
						gl.bindTexture(gl.TEXTURE_2D, null);
						gl.disableVertexAttribArray(0);
						gl.disableVertexAttribArray(1);
						gl.disableVertexAttribArray(2);
					},

					sequence: 0
				},

				// mesh, shader '_02_FBXASC045_Default1noCulling'
				m___02__FBXASC045__Default1noCulling:
				{
					setShader: function(instance, resetShader)
					{
						var shader = instance.global.shaders.m___02__FBXASC045__Default1noCulling;
						if (resetShader != shader.resetShader)
						{
							resetShader();
							gl.useProgram(shader.program);
							gl.enableVertexAttribArray(0);
							gl.enableVertexAttribArray(1);
							gl.enableVertexAttribArray(2);
						}
						var uniform = instance.shaders.m___02__FBXASC045__Default1noCulling.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.activeTexture(gl.TEXTURE0);
						gl.bindTexture(gl.TEXTURE_2D, uniform._c);
					},

					resetShader: function()
					{
						gl.bindTexture(gl.TEXTURE_2D, null);
						gl.disableVertexAttribArray(0);
						gl.disableVertexAttribArray(1);
						gl.disableVertexAttribArray(2);
					},

					sequence: 0
				},

				// mesh, shader '_03_FBXASC045_Default1noCulling'
				m___03__FBXASC045__Default1noCulling:
				{
					setShader: function(instance, resetShader)
					{
						var shader = instance.global.shaders.m___03__FBXASC045__Default1noCulling;
						if (resetShader != shader.resetShader)
						{
							resetShader();
							gl.useProgram(shader.program);
							gl.enableVertexAttribArray(0);
							gl.enableVertexAttribArray(1);
							gl.enableVertexAttribArray(2);
						}
						var uniform = instance.shaders.m___03__FBXASC045__Default1noCulling.uniform;
						gl.uniform4fv(shader._b, uniform._b);
						gl.activeTexture(gl.TEXTURE0);
						gl.bindTexture(gl.TEXTURE_2D, uniform._c);
					},

					resetShader: function()
					{
						gl.bindTexture(gl.TEXTURE_2D, null);
						gl.disableVertexAttribArray(0);
						gl.disableVertexAttribArray(1);
						gl.disableVertexAttribArray(2);
					},

					sequence: 0
				},

				// mesh, shader 'FrontColorNoCulling'
				m_FrontColorNoCulling:
				{
					setShader: function(instance, resetShader)
					{
						var shader = instance.global.shaders.m_FrontColorNoCulling;
						if (resetShader != shader.resetShader)
						{
							resetShader();
							gl.useProgram(shader.program);
							gl.enableVertexAttribArray(0);
							gl.enableVertexAttribArray(1);
						}
						var uniform = instance.shaders.m_FrontColorNoCulling.uniform;
						if (instance.renderSequence != shader.sequence)
						{
							shader.sequence = instance.renderSequence;
							gl.uniform4fv(shader._b, uniform._b);
						}
					},

					resetShader: function()
					{
						gl.disableVertexAttribArray(0);
						gl.disableVertexAttribArray(1);
					},

					sequence: 0
				}

			},

			initGlobal: function(global, data)
			{
				// mesh, shader '_01_FBXASC045_Default1noCulling'
				var vsm___01__FBXASC045__Default1noCulling =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _d[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
attribute vec2 _2;\n\
varying vec3 _e;\n\
varying vec3 _f;\n\
varying vec2 _g;\n\
void main()\n\
{\n\
	vec3 a = _0;\n\
	vec3 b = _1;\n\
	vec3 c = _d[0].xyz * a.x + _d[1].xyz * a.y + _d[2].xyz * a.z + _d[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_e = _d[4].xyz * b.x + _d[5].xyz * b.y + _d[6].xyz * b.z;\n\
	_f = c;\n\
	_g = _2;\n\
}\n\
';
				var psm___01__FBXASC045__Default1noCulling =
'precision mediump float;\n\
uniform sampler2D _c;\n\
varying vec3 _e;\n\
varying vec3 _f;\n\
varying vec2 _g;\n\
void main()\n\
{\n\
	vec3 a = (_e);\n\
	vec3 b = a * a;\n\
	vec3 c = a * inversesqrt(b.x + b.y + b.z) * (gl_FrontFacing ? 1.0 : -1.0);\n\
	vec3 d = _f;\n\
	vec3 e = d * d;\n\
	vec3 f = c * vec3(-0.408248, 0.408248, 0.816497);\n\
	vec3 g = c * vec3(0.408248, -0.408248, -0.816497);\n\
	vec3 h = (vec3(0.408248, -0.408248, -0.816497) - (g.x + g.y + g.z) * 2.0 * c) * -(d * inversesqrt(e.x + e.y + e.z));\n\
	vec3 i = texture2D(_c, _g * vec2(1.0, -1.0) + vec2(0.0, 1.0)).xyz * max(f.x + f.y + f.z, 0.0) + vec3(pow(max(h.x + h.y + h.z, 0.0), 20.0) * 0.33);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

				// mesh, shader 'FrontColorNoCulling'
				var vsm_FrontColorNoCulling =
'precision highp float;\n\
uniform vec4 _b[4];\n\
uniform vec4 _c[7];\n\
attribute vec3 _1;\n\
attribute vec3 _0;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = _0;\n\
	vec3 b = _1;\n\
	vec3 c = _c[0].xyz * a.x + _c[1].xyz * a.y + _c[2].xyz * a.z + _c[3].xyz;\n\
	gl_Position = _b[0] * c.x + _b[1] * c.y + _b[2] * c.z + _b[3];\n\
	_d = _c[4].xyz * b.x + _c[5].xyz * b.y + _c[6].xyz * b.z;\n\
	_e = c;\n\
}\n\
';
				var psm_FrontColorNoCulling =
'precision mediump float;\n\
varying vec3 _d;\n\
varying vec3 _e;\n\
void main()\n\
{\n\
	vec3 a = (_d);\n\
	vec3 b = a * a;\n\
	vec3 c = a * inversesqrt(b.x + b.y + b.z) * (gl_FrontFacing ? 1.0 : -1.0);\n\
	vec3 d = _e;\n\
	vec3 e = d * d;\n\
	vec3 f = c * vec3(-0.408248, 0.408248, 0.816497);\n\
	vec3 g = c * vec3(0.408248, -0.408248, -0.816497);\n\
	vec3 h = (vec3(0.408248, -0.408248, -0.816497) - (g.x + g.y + g.z) * 2.0 * c) * -(d * inversesqrt(e.x + e.y + e.z));\n\
	vec3 i = max(f.x + f.y + f.z, 0.0) + vec3(pow(max(h.x + h.y + h.z, 0.0), 20.0) * 0.33);\n\
	gl_FragColor = vec4(i, 1.0);\n\
}\n\
';

				gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0 = gl.createBuffer());
				gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(data, 0, 36536), gl.STATIC_DRAW);
				gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer1 = gl.createBuffer());
				gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(data, 36536, 7936), gl.STATIC_DRAW);
				gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer2 = gl.createBuffer());
				gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(data, 44472, 4480), gl.STATIC_DRAW);
				gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3 = gl.createBuffer());
				gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(data, 48952, 109608), gl.STATIC_DRAW);
				gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer4 = gl.createBuffer());
				gl.bufferData(gl.ARRAY_BUFFER, new Int8Array(data, 158560, 7392), gl.STATIC_DRAW);

				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0 = gl.createBuffer());
				gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int8Array(data, 165952, 2505), gl.STATIC_DRAW);
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer1 = gl.createBuffer());
				gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int8Array(data, 168460, 32388), gl.STATIC_DRAW);

				var shaders = global.shaders;

				// mesh, shader '_01_FBXASC045_Default1noCulling'
				{
					var shader = shaders.m___01__FBXASC045__Default1noCulling;
					var vertexShader = inka3d.createVertexShader(vsm___01__FBXASC045__Default1noCulling, "mesh, shader '_01_FBXASC045_Default1noCulling'");
					var pixelShader = inka3d.createPixelShader(psm___01__FBXASC045__Default1noCulling, "mesh, shader '_01_FBXASC045_Default1noCulling'");
					var program = shader.program = gl.createProgram();
					gl.attachShader(program, vertexShader);
					gl.attachShader(program, pixelShader);
					gl.bindAttribLocation(program, 1, '_1');
					gl.bindAttribLocation(program, 0, '_0');
					gl.bindAttribLocation(program, 2, '_2');
					gl.linkProgram(program);
					gl.deleteShader(vertexShader);
					gl.deleteShader(pixelShader);
					gl.useProgram(program);
					shader._b = gl.getUniformLocation(program, '_b');
					gl.uniform1i(gl.getUniformLocation(program, '_c'), 0);
					shader._d = gl.getUniformLocation(program, '_d');
				}

				// mesh, shader '_02_FBXASC045_Default1noCulling'
				{
					var shader = shaders.m___02__FBXASC045__Default1noCulling;
					var shader2 = shaders.m___01__FBXASC045__Default1noCulling;
					shader.program = shader2.program;
					shader._b = shader2._b;
					shader._d = shader2._d;
				}

				// mesh, shader '_03_FBXASC045_Default1noCulling'
				{
					var shader = shaders.m___03__FBXASC045__Default1noCulling;
					var shader2 = shaders.m___01__FBXASC045__Default1noCulling;
					shader.program = shader2.program;
					shader._b = shader2._b;
					shader._d = shader2._d;
				}

				// mesh, shader 'FrontColorNoCulling'
				{
					var shader = shaders.m_FrontColorNoCulling;
					var vertexShader = inka3d.createVertexShader(vsm_FrontColorNoCulling, "mesh, shader 'FrontColorNoCulling'");
					var pixelShader = inka3d.createPixelShader(psm_FrontColorNoCulling, "mesh, shader 'FrontColorNoCulling'");
					var program = shader.program = gl.createProgram();
					gl.attachShader(program, vertexShader);
					gl.attachShader(program, pixelShader);
					gl.bindAttribLocation(program, 1, '_1');
					gl.bindAttribLocation(program, 0, '_0');
					gl.linkProgram(program);
					gl.deleteShader(vertexShader);
					gl.deleteShader(pixelShader);
					shader._b = gl.getUniformLocation(program, '_b');
					shader._c = gl.getUniformLocation(program, '_c');
				}

			},

			doneGlobal: function(global)
			{
				gl.deleteBuffer(global.shaderInputBuffer0);
				gl.deleteBuffer(global.shaderInputBuffer1);
				gl.deleteBuffer(global.shaderInputBuffer2);
				gl.deleteBuffer(global.shaderInputBuffer3);
				gl.deleteBuffer(global.shaderInputBuffer4);
				gl.deleteBuffer(global.indexBuffer0);
				gl.deleteBuffer(global.indexBuffer1);
				gl.deleteProgram(global.shaders.m___01__FBXASC045__Default1noCulling.program);
				gl.deleteProgram(global.shaders.m___02__FBXASC045__Default1noCulling.program);
				gl.deleteProgram(global.shaders.m___03__FBXASC045__Default1noCulling.program);
				gl.deleteProgram(global.shaders.m_FrontColorNoCulling.program);
			},

			render: {
				a_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___03__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___03__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8, 0);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 0);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 12);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer1);
					gl.drawElements(gl.TRIANGLES, 2562, gl.UNSIGNED_SHORT, 0);
					return shader.resetShader;
				},
				b_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___01__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___01__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer1);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 0);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 12);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 24);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
					gl.drawElements(gl.TRIANGLES, 9, gl.UNSIGNED_BYTE, 6);
					return shader.resetShader;
				},
				c_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___02__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___02__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8, 4328);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 12984);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 12996);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer1);
					gl.drawElements(gl.TRIANGLES, 4164, gl.UNSIGNED_SHORT, 5124);
					return shader.resetShader;
				},
				d_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___03__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___03__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer4);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 8);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 20);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 0);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
					gl.drawElements(gl.TRIANGLES, 990, gl.UNSIGNED_BYTE, 15);
					return shader.resetShader;
				},
				e_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___03__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___03__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer1);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 160);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 172);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 184);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
					gl.drawElements(gl.TRIANGLES, 990, gl.UNSIGNED_BYTE, 1005);
					return shader.resetShader;
				},
				f_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m_FrontColorNoCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m_FrontColorNoCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _c = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_c[0] = G;
					_c[1] = H;
					_c[2] = I;
					_c[4] = J;
					_c[5] = K;
					_c[6] = L;
					_c[8] = M;
					_c[9] = N;
					_c[10] = O;
					_c[12] = q * m + u * n + y * o + C * p;
					_c[13] = r * m + v * n + z * o + D * p;
					_c[14] = s * m + w * n + A * o + E * p;
					_c[16] = K * O - L * N;
					_c[17] = L * M - J * O;
					_c[18] = J * N - K * M;
					_c[20] = N * I - O * H;
					_c[21] = O * G - M * I;
					_c[22] = M * H - N * G;
					_c[24] = H * L - I * K;
					_c[25] = I * J - G * L;
					_c[26] = G * K - H * J;
					gl.uniform4fv(shader._c, _c);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 31920);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 31932);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
					gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_BYTE, 0);
					return shader.resetShader;
				},
				g_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___01__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___01__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer2);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 0);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 20);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 12);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
					gl.drawElements(gl.TRIANGLES, 216, gl.UNSIGNED_BYTE, 1995);
					return shader.resetShader;
				},
				h_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___01__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___01__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer2);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 1984);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 2004);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 1996);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
					gl.drawElements(gl.TRIANGLES, 282, gl.UNSIGNED_BYTE, 2211);
					return shader.resetShader;
				},
				i_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___01__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___01__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer1);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 32, 7776);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 32, 7788);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 32, 7800);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
					gl.drawElements(gl.TRIANGLES, 9, gl.UNSIGNED_BYTE, 2493);
					return shader.resetShader;
				},
				j_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___03__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___03__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8, 10688);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 32076);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 32064);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer1);
					gl.drawElements(gl.TRIANGLES, 3387, gl.UNSIGNED_SHORT, 13452);
					return shader.resetShader;
				},
				k_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m_FrontColorNoCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m_FrontColorNoCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _c = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_c[0] = G;
					_c[1] = H;
					_c[2] = I;
					_c[4] = J;
					_c[5] = K;
					_c[6] = L;
					_c[8] = M;
					_c[9] = N;
					_c[10] = O;
					_c[12] = q * m + u * n + y * o + C * p;
					_c[13] = r * m + v * n + z * o + D * p;
					_c[14] = s * m + w * n + A * o + E * p;
					_c[16] = K * O - L * N;
					_c[17] = L * M - J * O;
					_c[18] = J * N - K * M;
					_c[20] = N * I - O * H;
					_c[21] = O * G - M * I;
					_c[22] = M * H - N * G;
					_c[24] = H * L - I * K;
					_c[25] = I * J - G * L;
					_c[26] = G * K - H * J;
					gl.uniform4fv(shader._c, _c);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 51468);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 51456);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer1);
					gl.drawElements(gl.TRIANGLES, 576, gl.UNSIGNED_SHORT, 20226);
					return shader.resetShader;
				},
				l_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___03__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___03__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8, 26424);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 79272);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 79284);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer1);
					gl.drawElements(gl.TRIANGLES, 3372, gl.UNSIGNED_SHORT, 22560);
					return shader.resetShader;
				},
				m_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m_FrontColorNoCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m_FrontColorNoCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _c = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_c[0] = G;
					_c[1] = H;
					_c[2] = I;
					_c[4] = J;
					_c[5] = K;
					_c[6] = L;
					_c[8] = M;
					_c[9] = N;
					_c[10] = O;
					_c[12] = q * m + u * n + y * o + C * p;
					_c[13] = r * m + v * n + z * o + D * p;
					_c[14] = s * m + w * n + A * o + E * p;
					_c[16] = K * O - L * N;
					_c[17] = L * M - J * O;
					_c[18] = J * N - K * M;
					_c[20] = N * I - O * H;
					_c[21] = O * G - M * I;
					_c[22] = M * H - N * G;
					_c[24] = H * L - I * K;
					_c[25] = I * J - G * L;
					_c[26] = G * K - H * J;
					gl.uniform4fv(shader._c, _c);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 65184);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 65196);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer1);
					gl.drawElements(gl.TRIANGLES, 591, gl.UNSIGNED_SHORT, 21378);
					return shader.resetShader;
				},
				n_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m___01__FBXASC045__Default1noCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m___01__FBXASC045__Default1noCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _d = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_d[0] = G;
					_d[1] = H;
					_d[2] = I;
					_d[4] = J;
					_d[5] = K;
					_d[6] = L;
					_d[8] = M;
					_d[9] = N;
					_d[10] = O;
					_d[12] = q * m + u * n + y * o + C * p;
					_d[13] = r * m + v * n + z * o + D * p;
					_d[14] = s * m + w * n + A * o + E * p;
					_d[16] = K * O - L * N;
					_d[17] = L * M - J * O;
					_d[18] = J * N - K * M;
					_d[20] = N * I - O * H;
					_d[21] = O * G - M * I;
					_d[22] = M * H - N * G;
					_d[24] = H * L - I * K;
					_d[25] = I * J - G * L;
					_d[26] = G * K - H * J;
					gl.uniform4fv(shader._d, _d);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer0);
					gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8, 32896);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 98688);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 98700);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer1);
					gl.drawElements(gl.TRIANGLES, 1542, gl.UNSIGNED_SHORT, 29304);
					return shader.resetShader;
				},
				o_0: function(renderJob, resetShader)
				{
					var instance = renderJob.instance;
					var global = instance.global;
					var shader = global.shaders.m_FrontColorNoCulling;
					if (resetShader != shader.resetShader || instance.sequence != shader.sequence)
						shader.setShader(instance, resetShader);
					var transfer = instance.shaders.m_FrontColorNoCulling.transfer;
					var _a = transfer._a;
					var fworldMatrix = renderJob.frenderJob;
					var _c = instance.fu0_28;
					var a = fworldMatrix[0];
					var b = fworldMatrix[1];
					var c = fworldMatrix[2];
					var d = fworldMatrix[3];
					var e = fworldMatrix[4];
					var f = fworldMatrix[5];
					var g = fworldMatrix[6];
					var h = fworldMatrix[7];
					var i = fworldMatrix[8];
					var j = fworldMatrix[9];
					var k = fworldMatrix[10];
					var l = fworldMatrix[11];
					var m = fworldMatrix[12];
					var n = fworldMatrix[13];
					var o = fworldMatrix[14];
					var p = fworldMatrix[15];
					var q = _a[0];
					var r = _a[1];
					var s = _a[2];
					var t = _a[3];
					var u = _a[4];
					var v = _a[5];
					var w = _a[6];
					var x = _a[7];
					var y = _a[8];
					var z = _a[9];
					var A = _a[10];
					var B = _a[11];
					var C = _a[12];
					var D = _a[13];
					var E = _a[14];
					var F = _a[15];
					var G = q * a + u * b + y * c + C * d;
					var H = r * a + v * b + z * c + D * d;
					var I = s * a + w * b + A * c + E * d;
					var J = q * e + u * f + y * g + C * h;
					var K = r * e + v * f + z * g + D * h;
					var L = s * e + w * f + A * g + E * h;
					var M = q * i + u * j + y * k + C * l;
					var N = r * i + v * j + z * k + D * l;
					var O = s * i + w * j + A * k + E * l;
					_c[0] = G;
					_c[1] = H;
					_c[2] = I;
					_c[4] = J;
					_c[5] = K;
					_c[6] = L;
					_c[8] = M;
					_c[9] = N;
					_c[10] = O;
					_c[12] = q * m + u * n + y * o + C * p;
					_c[13] = r * m + v * n + z * o + D * p;
					_c[14] = s * m + w * n + A * o + E * p;
					_c[16] = K * O - L * N;
					_c[17] = L * M - J * O;
					_c[18] = J * N - K * M;
					_c[20] = N * I - O * H;
					_c[21] = O * G - M * I;
					_c[22] = M * H - N * G;
					_c[24] = H * L - I * K;
					_c[25] = I * J - G * L;
					_c[26] = G * K - H * J;
					gl.uniform4fv(shader._c, _c);
					gl.disable(gl.CULL_FACE);
					gl.bindBuffer(gl.ARRAY_BUFFER, global.shaderInputBuffer3);
					gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 24, 109536);
					gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 24, 109548);
					gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, global.indexBuffer0);
					gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_BYTE, 2502);
					return shader.resetShader;
				}
			},

			createInstance: function(global, renderer)
			{
				var instance = 
				{
					global: global,
					renderer: renderer,
					ids: new Uint32Array(10),
					fstate: new Float32Array(1), ostate: [], 
					ouniforms: [], 
					shaders:
					{
						m___01__FBXASC045__Default1noCulling:
						{
							uniform: {_b: new Float32Array(16), _c: null},
							transfer: {_a: new Float32Array(16)},
						},
						m___02__FBXASC045__Default1noCulling:
						{
							uniform: {_b: new Float32Array(16), _c: null},
							transfer: {_a: new Float32Array(16)},
						},
						m___03__FBXASC045__Default1noCulling:
						{
							uniform: {_b: new Float32Array(16), _c: null},
							transfer: {_a: new Float32Array(16)},
						},
						m_FrontColorNoCulling:
						{
							uniform: {_b: new Float32Array(16)},
							transfer: {_a: new Float32Array(16)},
						}
					},
					itransforms: new Int32Array(10), ftransforms: new Float32Array(160), 
					fboundingBoxes: new Float32Array(60), 
					sceneSequence: 0,
					deformerSequence: 0,
					renderSequence: 0,
					viewProjectionMatrix: new Float32Array(16),
					fu0_28: new Float32Array(28),
				};

				var particlePools = instance.particlePools = {};

				instance.update = function()
				{
					++instance.sceneSequence;

					var fstate = instance.fstate;
					var ostate = instance.ostate;
					var buffers = global.buffers;
					var ouniforms = instance.ouniforms;
					var itransforms = instance.itransforms;
					var ftransforms = instance.ftransforms;
					var fboundingBoxes = instance.fboundingBoxes;

					ouniforms[2] = ostate[2];
					ouniforms[1] = ostate[1];
					ouniforms[0] = ostate[0];
					ftransforms[96] = 2.54;
					ftransforms[97] = 0.0;
					ftransforms[98] = 0.0;
					ftransforms[99] = 0.0;
					ftransforms[100] = 0.0;
					ftransforms[101] = 1.58208e-5;
					ftransforms[102] = -2.54;
					ftransforms[103] = 0.0;
					ftransforms[104] = 0.0;
					ftransforms[105] = 2.54;
					ftransforms[106] = 1.58208e-5;
					ftransforms[107] = 0.0;
					ftransforms[108] = 5.31091;
					ftransforms[109] = -1.04076e-4;
					ftransforms[110] = 16.7093;
					ftransforms[111] = 1.0;
					itransforms[6] = 1;
					ftransforms[112] = 2.54;
					ftransforms[113] = 0.0;
					ftransforms[114] = 0.0;
					ftransforms[115] = 0.0;
					ftransforms[116] = 0.0;
					ftransforms[117] = 1.58208e-5;
					ftransforms[118] = -2.54;
					ftransforms[119] = 0.0;
					ftransforms[120] = 0.0;
					ftransforms[121] = 2.54;
					ftransforms[122] = 1.58208e-5;
					ftransforms[123] = 0.0;
					ftransforms[124] = 5.31091;
					ftransforms[125] = -1.04076e-4;
					ftransforms[126] = 16.7093;
					ftransforms[127] = 1.0;
					itransforms[7] = 1;
					ftransforms[128] = 2.54;
					ftransforms[129] = 0.0;
					ftransforms[130] = 0.0;
					ftransforms[131] = 0.0;
					ftransforms[132] = 0.0;
					ftransforms[133] = 1.58208e-5;
					ftransforms[134] = -2.54;
					ftransforms[135] = 0.0;
					ftransforms[136] = 0.0;
					ftransforms[137] = 2.54;
					ftransforms[138] = 1.58208e-5;
					ftransforms[139] = 0.0;
					ftransforms[140] = 5.31091;
					ftransforms[141] = -1.04076e-4;
					ftransforms[142] = 16.7093;
					ftransforms[143] = 1.0;
					itransforms[8] = 1;
					ftransforms[80] = 2.54;
					ftransforms[81] = 0.0;
					ftransforms[82] = 0.0;
					ftransforms[83] = 0.0;
					ftransforms[84] = 0.0;
					ftransforms[85] = 1.58208e-5;
					ftransforms[86] = -2.54;
					ftransforms[87] = 0.0;
					ftransforms[88] = 0.0;
					ftransforms[89] = 2.54;
					ftransforms[90] = 1.58208e-5;
					ftransforms[91] = 0.0;
					ftransforms[92] = 5.31091;
					ftransforms[93] = -1.04076e-4;
					ftransforms[94] = 16.7093;
					ftransforms[95] = 1.0;
					itransforms[5] = 1;
					ftransforms[48] = 2.54;
					ftransforms[49] = 0.0;
					ftransforms[50] = 0.0;
					ftransforms[51] = 0.0;
					ftransforms[52] = 0.0;
					ftransforms[53] = 1.58208e-5;
					ftransforms[54] = -2.54;
					ftransforms[55] = 0.0;
					ftransforms[56] = 0.0;
					ftransforms[57] = 2.54;
					ftransforms[58] = 1.58208e-5;
					ftransforms[59] = 0.0;
					ftransforms[60] = 5.31091;
					ftransforms[61] = -1.04076e-4;
					ftransforms[62] = 16.7093;
					ftransforms[63] = 1.0;
					itransforms[3] = 1;
					ftransforms[32] = 2.54;
					ftransforms[33] = 0.0;
					ftransforms[34] = 0.0;
					ftransforms[35] = 0.0;
					ftransforms[36] = 0.0;
					ftransforms[37] = 1.58208e-5;
					ftransforms[38] = -2.54;
					ftransforms[39] = 0.0;
					ftransforms[40] = 0.0;
					ftransforms[41] = 2.54;
					ftransforms[42] = 1.58208e-5;
					ftransforms[43] = 0.0;
					ftransforms[44] = 5.31091;
					ftransforms[45] = -1.04076e-4;
					ftransforms[46] = 16.7093;
					ftransforms[47] = 1.0;
					itransforms[2] = 1;
					ftransforms[64] = 2.54;
					ftransforms[65] = 0.0;
					ftransforms[66] = 0.0;
					ftransforms[67] = 0.0;
					ftransforms[68] = 0.0;
					ftransforms[69] = 1.58208e-5;
					ftransforms[70] = -2.54;
					ftransforms[71] = 0.0;
					ftransforms[72] = 0.0;
					ftransforms[73] = 2.54;
					ftransforms[74] = 1.58208e-5;
					ftransforms[75] = 0.0;
					ftransforms[76] = 5.31091;
					ftransforms[77] = -1.04076e-4;
					ftransforms[78] = 16.7093;
					ftransforms[79] = 1.0;
					itransforms[4] = 1;
					ftransforms[16] = 2.54;
					ftransforms[17] = 0.0;
					ftransforms[18] = 0.0;
					ftransforms[19] = 0.0;
					ftransforms[20] = 0.0;
					ftransforms[21] = 1.58208e-5;
					ftransforms[22] = -2.54;
					ftransforms[23] = 0.0;
					ftransforms[24] = 0.0;
					ftransforms[25] = 2.54;
					ftransforms[26] = 1.58208e-5;
					ftransforms[27] = 0.0;
					ftransforms[28] = 5.31091;
					ftransforms[29] = -1.04076e-4;
					ftransforms[30] = 16.7093;
					ftransforms[31] = 1.0;
					itransforms[1] = 1;
					ftransforms[0] = 2.54;
					ftransforms[1] = 0.0;
					ftransforms[2] = 0.0;
					ftransforms[3] = 0.0;
					ftransforms[4] = 0.0;
					ftransforms[5] = 1.58208e-5;
					ftransforms[6] = -2.54;
					ftransforms[7] = 0.0;
					ftransforms[8] = 0.0;
					ftransforms[9] = 2.54;
					ftransforms[10] = 1.58208e-5;
					ftransforms[11] = 0.0;
					ftransforms[12] = 5.31091;
					ftransforms[13] = -1.04076e-4;
					ftransforms[14] = 16.7093;
					ftransforms[15] = 1.0;
					itransforms[0] = 1;
					ftransforms[144] = 2.54;
					ftransforms[145] = 0.0;
					ftransforms[146] = 0.0;
					ftransforms[147] = 0.0;
					ftransforms[148] = 0.0;
					ftransforms[149] = 1.58208e-5;
					ftransforms[150] = -2.54;
					ftransforms[151] = 0.0;
					ftransforms[152] = 0.0;
					ftransforms[153] = 2.54;
					ftransforms[154] = 1.58208e-5;
					ftransforms[155] = 0.0;
					ftransforms[156] = 5.31091;
					ftransforms[157] = -1.04076e-4;
					ftransforms[158] = 16.7093;
					ftransforms[159] = 1.0;
					itransforms[9] = 1;
					fboundingBoxes[0] = 1.97237;
					fboundingBoxes[1] = 0.456182;
					fboundingBoxes[2] = 115.113;
					fboundingBoxes[3] = 18.9592;
					fboundingBoxes[4] = 15.0787;
					fboundingBoxes[5] = 50.3152;
					fboundingBoxes[6] = 18.3336;
					fboundingBoxes[7] = 6.3197;
					fboundingBoxes[8] = 113.66;
					fboundingBoxes[9] = 7.34896;
					fboundingBoxes[10] = 15.2343;
					fboundingBoxes[11] = 18.1627;
					fboundingBoxes[12] = 6.13647;
					fboundingBoxes[13] = -4.54765;
					fboundingBoxes[14] = 45.2474;
					fboundingBoxes[15] = 7.84404;
					fboundingBoxes[16] = 11.2183;
					fboundingBoxes[17] = 45.4964;
					fboundingBoxes[18] = -18.2462;
					fboundingBoxes[19] = 3.2885;
					fboundingBoxes[20] = 102.923;
					fboundingBoxes[21] = 9.11243;
					fboundingBoxes[22] = 8.06776;
					fboundingBoxes[23] = 27.2975;
					fboundingBoxes[24] = -3.75034;
					fboundingBoxes[25] = 11.3456;
					fboundingBoxes[26] = 44.7874;
					fboundingBoxes[27] = 9.43791;
					fboundingBoxes[28] = 18.1376;
					fboundingBoxes[29] = 44.805;
					fboundingBoxes[30] = 3.15531;
					fboundingBoxes[31] = 1.60878;
					fboundingBoxes[32] = 154.107;
					fboundingBoxes[33] = 10.4935;
					fboundingBoxes[34] = 10.5501;
					fboundingBoxes[35] = 13.8592;
					fboundingBoxes[36] = -5.98624;
					fboundingBoxes[37] = 0.718718;
					fboundingBoxes[38] = 158.072;
					fboundingBoxes[39] = 0.472174;
					fboundingBoxes[40] = 1.34834;
					fboundingBoxes[41] = 3.53437;
					fboundingBoxes[42] = 3.02202;
					fboundingBoxes[43] = 6.39791;
					fboundingBoxes[44] = 150.916;
					fboundingBoxes[45] = 8.51519;
					fboundingBoxes[46] = 4.53818;
					fboundingBoxes[47] = 10.3799;
					fboundingBoxes[48] = 2.8594;
					fboundingBoxes[49] = 4.85434;
					fboundingBoxes[50] = 148.566;
					fboundingBoxes[51] = 8.00217;
					fboundingBoxes[52] = 4.01869;
					fboundingBoxes[53] = 7.89868;
					fboundingBoxes[54] = 7.95354;
					fboundingBoxes[55] = -0.65924;
					fboundingBoxes[56] = 159.602;
					fboundingBoxes[57] = 0.602634;
					fboundingBoxes[58] = 1.34752;
					fboundingBoxes[59] = 3.10918;
				};

				instance.render = function(fviewMatrix, fprojectionMatrix, layerName, renderQueues)
				{
					instance.renderSequence = ++global.sequence;
					var fviewProjectionMatrix = instance.viewProjectionMatrix;
					inka3d.matrix4x4Mul(fprojectionMatrix, fviewMatrix, fviewProjectionMatrix);
					var ouniforms = instance.ouniforms;
					var itransforms = instance.itransforms;
					var ftransforms = instance.ftransforms;
					var fboundingBoxes = instance.fboundingBoxes;

					// mesh, shader '_01_FBXASC045_Default1noCulling'
					var s_ = instance.shaders.m___01__FBXASC045__Default1noCulling;
					var uniform = s_.uniform;
					var _b = uniform._b;
					var _a = s_.transfer._a;
					_a[0] = fviewMatrix[0];
					_a[1] = fviewMatrix[1];
					_a[2] = fviewMatrix[2];
					_a[3] = fviewMatrix[3];
					_a[4] = fviewMatrix[4];
					_a[5] = fviewMatrix[5];
					_a[6] = fviewMatrix[6];
					_a[7] = fviewMatrix[7];
					_a[8] = fviewMatrix[8];
					_a[9] = fviewMatrix[9];
					_a[10] = fviewMatrix[10];
					_a[11] = fviewMatrix[11];
					_a[12] = fviewMatrix[12];
					_a[13] = fviewMatrix[13];
					_a[14] = fviewMatrix[14];
					_a[15] = fviewMatrix[15];
					_b[0] = fprojectionMatrix[0];
					_b[1] = fprojectionMatrix[1];
					_b[2] = fprojectionMatrix[2];
					_b[3] = fprojectionMatrix[3];
					_b[4] = fprojectionMatrix[4];
					_b[5] = fprojectionMatrix[5];
					_b[6] = fprojectionMatrix[6];
					_b[7] = fprojectionMatrix[7];
					_b[8] = fprojectionMatrix[8];
					_b[9] = fprojectionMatrix[9];
					_b[10] = fprojectionMatrix[10];
					_b[11] = fprojectionMatrix[11];
					_b[12] = fprojectionMatrix[12];
					_b[13] = fprojectionMatrix[13];
					_b[14] = fprojectionMatrix[14];
					_b[15] = fprojectionMatrix[15];
					uniform._c = ouniforms[0];
					s_.renderJobs = null;

					// mesh, shader '_02_FBXASC045_Default1noCulling'
					var s_ = instance.shaders.m___02__FBXASC045__Default1noCulling;
					var uniform = s_.uniform;
					var _b = uniform._b;
					var _a = s_.transfer._a;
					_a[0] = fviewMatrix[0];
					_a[1] = fviewMatrix[1];
					_a[2] = fviewMatrix[2];
					_a[3] = fviewMatrix[3];
					_a[4] = fviewMatrix[4];
					_a[5] = fviewMatrix[5];
					_a[6] = fviewMatrix[6];
					_a[7] = fviewMatrix[7];
					_a[8] = fviewMatrix[8];
					_a[9] = fviewMatrix[9];
					_a[10] = fviewMatrix[10];
					_a[11] = fviewMatrix[11];
					_a[12] = fviewMatrix[12];
					_a[13] = fviewMatrix[13];
					_a[14] = fviewMatrix[14];
					_a[15] = fviewMatrix[15];
					_b[0] = fprojectionMatrix[0];
					_b[1] = fprojectionMatrix[1];
					_b[2] = fprojectionMatrix[2];
					_b[3] = fprojectionMatrix[3];
					_b[4] = fprojectionMatrix[4];
					_b[5] = fprojectionMatrix[5];
					_b[6] = fprojectionMatrix[6];
					_b[7] = fprojectionMatrix[7];
					_b[8] = fprojectionMatrix[8];
					_b[9] = fprojectionMatrix[9];
					_b[10] = fprojectionMatrix[10];
					_b[11] = fprojectionMatrix[11];
					_b[12] = fprojectionMatrix[12];
					_b[13] = fprojectionMatrix[13];
					_b[14] = fprojectionMatrix[14];
					_b[15] = fprojectionMatrix[15];
					uniform._c = ouniforms[1];
					s_.renderJobs = null;

					// mesh, shader '_03_FBXASC045_Default1noCulling'
					var s_ = instance.shaders.m___03__FBXASC045__Default1noCulling;
					var uniform = s_.uniform;
					var _b = uniform._b;
					var _a = s_.transfer._a;
					_a[0] = fviewMatrix[0];
					_a[1] = fviewMatrix[1];
					_a[2] = fviewMatrix[2];
					_a[3] = fviewMatrix[3];
					_a[4] = fviewMatrix[4];
					_a[5] = fviewMatrix[5];
					_a[6] = fviewMatrix[6];
					_a[7] = fviewMatrix[7];
					_a[8] = fviewMatrix[8];
					_a[9] = fviewMatrix[9];
					_a[10] = fviewMatrix[10];
					_a[11] = fviewMatrix[11];
					_a[12] = fviewMatrix[12];
					_a[13] = fviewMatrix[13];
					_a[14] = fviewMatrix[14];
					_a[15] = fviewMatrix[15];
					_b[0] = fprojectionMatrix[0];
					_b[1] = fprojectionMatrix[1];
					_b[2] = fprojectionMatrix[2];
					_b[3] = fprojectionMatrix[3];
					_b[4] = fprojectionMatrix[4];
					_b[5] = fprojectionMatrix[5];
					_b[6] = fprojectionMatrix[6];
					_b[7] = fprojectionMatrix[7];
					_b[8] = fprojectionMatrix[8];
					_b[9] = fprojectionMatrix[9];
					_b[10] = fprojectionMatrix[10];
					_b[11] = fprojectionMatrix[11];
					_b[12] = fprojectionMatrix[12];
					_b[13] = fprojectionMatrix[13];
					_b[14] = fprojectionMatrix[14];
					_b[15] = fprojectionMatrix[15];
					uniform._c = ouniforms[2];
					s_.renderJobs = null;

					// mesh, shader 'FrontColorNoCulling'
					var s_ = instance.shaders.m_FrontColorNoCulling;
					var uniform = s_.uniform;
					var _b = uniform._b;
					var _a = s_.transfer._a;
					_a[0] = fviewMatrix[0];
					_a[1] = fviewMatrix[1];
					_a[2] = fviewMatrix[2];
					_a[3] = fviewMatrix[3];
					_a[4] = fviewMatrix[4];
					_a[5] = fviewMatrix[5];
					_a[6] = fviewMatrix[6];
					_a[7] = fviewMatrix[7];
					_a[8] = fviewMatrix[8];
					_a[9] = fviewMatrix[9];
					_a[10] = fviewMatrix[10];
					_a[11] = fviewMatrix[11];
					_a[12] = fviewMatrix[12];
					_a[13] = fviewMatrix[13];
					_a[14] = fviewMatrix[14];
					_a[15] = fviewMatrix[15];
					_b[0] = fprojectionMatrix[0];
					_b[1] = fprojectionMatrix[1];
					_b[2] = fprojectionMatrix[2];
					_b[3] = fprojectionMatrix[3];
					_b[4] = fprojectionMatrix[4];
					_b[5] = fprojectionMatrix[5];
					_b[6] = fprojectionMatrix[6];
					_b[7] = fprojectionMatrix[7];
					_b[8] = fprojectionMatrix[8];
					_b[9] = fprojectionMatrix[9];
					_b[10] = fprojectionMatrix[10];
					_b[11] = fprojectionMatrix[11];
					_b[12] = fprojectionMatrix[12];
					_b[13] = fprojectionMatrix[13];
					_b[14] = fprojectionMatrix[14];
					_b[15] = fprojectionMatrix[15];
					s_.renderJobs = null;

					var jobIt = renderQueues.begin;
					var jobEnd = renderQueues.end;
					if (itransforms[0])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___03__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[0];
							f_rj[1] = ftransforms[1];
							f_rj[2] = ftransforms[2];
							f_rj[3] = ftransforms[3];
							f_rj[4] = ftransforms[4];
							f_rj[5] = ftransforms[5];
							f_rj[6] = ftransforms[6];
							f_rj[7] = ftransforms[7];
							f_rj[8] = ftransforms[8];
							f_rj[9] = ftransforms[9];
							f_rj[10] = ftransforms[10];
							f_rj[11] = ftransforms[11];
							f_rj[12] = ftransforms[12];
							f_rj[13] = ftransforms[13];
							f_rj[14] = ftransforms[14];
							f_rj[15] = ftransforms[15];
							renderJob.render = global.render.a_0;
							renderJob.instance = instance;
						}
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___02__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[0];
							f_rj[1] = ftransforms[1];
							f_rj[2] = ftransforms[2];
							f_rj[3] = ftransforms[3];
							f_rj[4] = ftransforms[4];
							f_rj[5] = ftransforms[5];
							f_rj[6] = ftransforms[6];
							f_rj[7] = ftransforms[7];
							f_rj[8] = ftransforms[8];
							f_rj[9] = ftransforms[9];
							f_rj[10] = ftransforms[10];
							f_rj[11] = ftransforms[11];
							f_rj[12] = ftransforms[12];
							f_rj[13] = ftransforms[13];
							f_rj[14] = ftransforms[14];
							f_rj[15] = ftransforms[15];
							renderJob.render = global.render.c_0;
							renderJob.instance = instance;
						}
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m_FrontColorNoCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[0];
							f_rj[1] = ftransforms[1];
							f_rj[2] = ftransforms[2];
							f_rj[3] = ftransforms[3];
							f_rj[4] = ftransforms[4];
							f_rj[5] = ftransforms[5];
							f_rj[6] = ftransforms[6];
							f_rj[7] = ftransforms[7];
							f_rj[8] = ftransforms[8];
							f_rj[9] = ftransforms[9];
							f_rj[10] = ftransforms[10];
							f_rj[11] = ftransforms[11];
							f_rj[12] = ftransforms[12];
							f_rj[13] = ftransforms[13];
							f_rj[14] = ftransforms[14];
							f_rj[15] = ftransforms[15];
							renderJob.render = global.render.f_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[1])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___03__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[16];
							f_rj[1] = ftransforms[17];
							f_rj[2] = ftransforms[18];
							f_rj[3] = ftransforms[19];
							f_rj[4] = ftransforms[20];
							f_rj[5] = ftransforms[21];
							f_rj[6] = ftransforms[22];
							f_rj[7] = ftransforms[23];
							f_rj[8] = ftransforms[24];
							f_rj[9] = ftransforms[25];
							f_rj[10] = ftransforms[26];
							f_rj[11] = ftransforms[27];
							f_rj[12] = ftransforms[28];
							f_rj[13] = ftransforms[29];
							f_rj[14] = ftransforms[30];
							f_rj[15] = ftransforms[31];
							renderJob.render = global.render.j_0;
							renderJob.instance = instance;
						}
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m_FrontColorNoCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[16];
							f_rj[1] = ftransforms[17];
							f_rj[2] = ftransforms[18];
							f_rj[3] = ftransforms[19];
							f_rj[4] = ftransforms[20];
							f_rj[5] = ftransforms[21];
							f_rj[6] = ftransforms[22];
							f_rj[7] = ftransforms[23];
							f_rj[8] = ftransforms[24];
							f_rj[9] = ftransforms[25];
							f_rj[10] = ftransforms[26];
							f_rj[11] = ftransforms[27];
							f_rj[12] = ftransforms[28];
							f_rj[13] = ftransforms[29];
							f_rj[14] = ftransforms[30];
							f_rj[15] = ftransforms[31];
							renderJob.render = global.render.k_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[2])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___03__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[32];
							f_rj[1] = ftransforms[33];
							f_rj[2] = ftransforms[34];
							f_rj[3] = ftransforms[35];
							f_rj[4] = ftransforms[36];
							f_rj[5] = ftransforms[37];
							f_rj[6] = ftransforms[38];
							f_rj[7] = ftransforms[39];
							f_rj[8] = ftransforms[40];
							f_rj[9] = ftransforms[41];
							f_rj[10] = ftransforms[42];
							f_rj[11] = ftransforms[43];
							f_rj[12] = ftransforms[44];
							f_rj[13] = ftransforms[45];
							f_rj[14] = ftransforms[46];
							f_rj[15] = ftransforms[47];
							renderJob.render = global.render.e_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[3])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___03__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[48];
							f_rj[1] = ftransforms[49];
							f_rj[2] = ftransforms[50];
							f_rj[3] = ftransforms[51];
							f_rj[4] = ftransforms[52];
							f_rj[5] = ftransforms[53];
							f_rj[6] = ftransforms[54];
							f_rj[7] = ftransforms[55];
							f_rj[8] = ftransforms[56];
							f_rj[9] = ftransforms[57];
							f_rj[10] = ftransforms[58];
							f_rj[11] = ftransforms[59];
							f_rj[12] = ftransforms[60];
							f_rj[13] = ftransforms[61];
							f_rj[14] = ftransforms[62];
							f_rj[15] = ftransforms[63];
							renderJob.render = global.render.l_0;
							renderJob.instance = instance;
						}
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m_FrontColorNoCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[48];
							f_rj[1] = ftransforms[49];
							f_rj[2] = ftransforms[50];
							f_rj[3] = ftransforms[51];
							f_rj[4] = ftransforms[52];
							f_rj[5] = ftransforms[53];
							f_rj[6] = ftransforms[54];
							f_rj[7] = ftransforms[55];
							f_rj[8] = ftransforms[56];
							f_rj[9] = ftransforms[57];
							f_rj[10] = ftransforms[58];
							f_rj[11] = ftransforms[59];
							f_rj[12] = ftransforms[60];
							f_rj[13] = ftransforms[61];
							f_rj[14] = ftransforms[62];
							f_rj[15] = ftransforms[63];
							renderJob.render = global.render.m_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[4])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___03__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[64];
							f_rj[1] = ftransforms[65];
							f_rj[2] = ftransforms[66];
							f_rj[3] = ftransforms[67];
							f_rj[4] = ftransforms[68];
							f_rj[5] = ftransforms[69];
							f_rj[6] = ftransforms[70];
							f_rj[7] = ftransforms[71];
							f_rj[8] = ftransforms[72];
							f_rj[9] = ftransforms[73];
							f_rj[10] = ftransforms[74];
							f_rj[11] = ftransforms[75];
							f_rj[12] = ftransforms[76];
							f_rj[13] = ftransforms[77];
							f_rj[14] = ftransforms[78];
							f_rj[15] = ftransforms[79];
							renderJob.render = global.render.d_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[5])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___01__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[80];
							f_rj[1] = ftransforms[81];
							f_rj[2] = ftransforms[82];
							f_rj[3] = ftransforms[83];
							f_rj[4] = ftransforms[84];
							f_rj[5] = ftransforms[85];
							f_rj[6] = ftransforms[86];
							f_rj[7] = ftransforms[87];
							f_rj[8] = ftransforms[88];
							f_rj[9] = ftransforms[89];
							f_rj[10] = ftransforms[90];
							f_rj[11] = ftransforms[91];
							f_rj[12] = ftransforms[92];
							f_rj[13] = ftransforms[93];
							f_rj[14] = ftransforms[94];
							f_rj[15] = ftransforms[95];
							renderJob.render = global.render.n_0;
							renderJob.instance = instance;
						}
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m_FrontColorNoCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[80];
							f_rj[1] = ftransforms[81];
							f_rj[2] = ftransforms[82];
							f_rj[3] = ftransforms[83];
							f_rj[4] = ftransforms[84];
							f_rj[5] = ftransforms[85];
							f_rj[6] = ftransforms[86];
							f_rj[7] = ftransforms[87];
							f_rj[8] = ftransforms[88];
							f_rj[9] = ftransforms[89];
							f_rj[10] = ftransforms[90];
							f_rj[11] = ftransforms[91];
							f_rj[12] = ftransforms[92];
							f_rj[13] = ftransforms[93];
							f_rj[14] = ftransforms[94];
							f_rj[15] = ftransforms[95];
							renderJob.render = global.render.o_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[6])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___01__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[96];
							f_rj[1] = ftransforms[97];
							f_rj[2] = ftransforms[98];
							f_rj[3] = ftransforms[99];
							f_rj[4] = ftransforms[100];
							f_rj[5] = ftransforms[101];
							f_rj[6] = ftransforms[102];
							f_rj[7] = ftransforms[103];
							f_rj[8] = ftransforms[104];
							f_rj[9] = ftransforms[105];
							f_rj[10] = ftransforms[106];
							f_rj[11] = ftransforms[107];
							f_rj[12] = ftransforms[108];
							f_rj[13] = ftransforms[109];
							f_rj[14] = ftransforms[110];
							f_rj[15] = ftransforms[111];
							renderJob.render = global.render.b_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[7])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___01__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[112];
							f_rj[1] = ftransforms[113];
							f_rj[2] = ftransforms[114];
							f_rj[3] = ftransforms[115];
							f_rj[4] = ftransforms[116];
							f_rj[5] = ftransforms[117];
							f_rj[6] = ftransforms[118];
							f_rj[7] = ftransforms[119];
							f_rj[8] = ftransforms[120];
							f_rj[9] = ftransforms[121];
							f_rj[10] = ftransforms[122];
							f_rj[11] = ftransforms[123];
							f_rj[12] = ftransforms[124];
							f_rj[13] = ftransforms[125];
							f_rj[14] = ftransforms[126];
							f_rj[15] = ftransforms[127];
							renderJob.render = global.render.h_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[8])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___01__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[128];
							f_rj[1] = ftransforms[129];
							f_rj[2] = ftransforms[130];
							f_rj[3] = ftransforms[131];
							f_rj[4] = ftransforms[132];
							f_rj[5] = ftransforms[133];
							f_rj[6] = ftransforms[134];
							f_rj[7] = ftransforms[135];
							f_rj[8] = ftransforms[136];
							f_rj[9] = ftransforms[137];
							f_rj[10] = ftransforms[138];
							f_rj[11] = ftransforms[139];
							f_rj[12] = ftransforms[140];
							f_rj[13] = ftransforms[141];
							f_rj[14] = ftransforms[142];
							f_rj[15] = ftransforms[143];
							renderJob.render = global.render.g_0;
							renderJob.instance = instance;
						}
					}
					if (itransforms[9])
					{
						if (jobIt != jobEnd)
						{
							var shader = instance.shaders.m___01__FBXASC045__Default1noCulling;
							var renderJob;
							renderJob = jobEnd;
							jobEnd = jobEnd.p;
							renderJob.next = shader.renderJobs;
							shader.renderJobs = renderJob;
							var f_rj = renderJob.frenderJob;
							f_rj[0] = ftransforms[144];
							f_rj[1] = ftransforms[145];
							f_rj[2] = ftransforms[146];
							f_rj[3] = ftransforms[147];
							f_rj[4] = ftransforms[148];
							f_rj[5] = ftransforms[149];
							f_rj[6] = ftransforms[150];
							f_rj[7] = ftransforms[151];
							f_rj[8] = ftransforms[152];
							f_rj[9] = ftransforms[153];
							f_rj[10] = ftransforms[154];
							f_rj[11] = ftransforms[155];
							f_rj[12] = ftransforms[156];
							f_rj[13] = ftransforms[157];
							f_rj[14] = ftransforms[158];
							f_rj[15] = ftransforms[159];
							renderJob.render = global.render.i_0;
							renderJob.instance = instance;
						}
					}
					renderQueues.begin = jobIt;
					var resetShader = renderQueues.resetShader;
					{
						var current = instance.shaders.m___01__FBXASC045__Default1noCulling.renderJobs;
						while (current)
						{
							resetShader = current.render(current, resetShader);
							current = current.next;
						}
					}
					{
						var current = instance.shaders.m___02__FBXASC045__Default1noCulling.renderJobs;
						while (current)
						{
							resetShader = current.render(current, resetShader);
							current = current.next;
						}
					}
					{
						var current = instance.shaders.m___03__FBXASC045__Default1noCulling.renderJobs;
						while (current)
						{
							resetShader = current.render(current, resetShader);
							current = current.next;
						}
					}
					{
						var current = instance.shaders.m_FrontColorNoCulling.renderJobs;
						while (current)
						{
							resetShader = current.render(current, resetShader);
							current = current.next;
						}
					}
					renderQueues.resetShader = resetShader;
				};

				var fstate = instance.fstate;
				var ostate = instance.ostate;

				return instance;
			},

			doneInstance: function(instance)
			{
			},

			sequence: 0,

			attributes:
			{
				"time": {t: 1, b: 0, e: 1}
			},

			textureBindings:
			[
				{n: "_01_-_Default1noCulling", b: 0},
				{n: "_02_-_Default1noCulling", b: 1},
				{n: "_03_-_Default1noCulling", b: 2}
			],

			objects:
			{
				"mesh10Shape[0]": 9,
				"mesh1Shape[0]": 0,
				"mesh2Shape[0]": 1,
				"mesh3Shape[0]": 2,
				"mesh4Shape[0]": 3,
				"mesh5Shape[0]": 4,
				"mesh6Shape[0]": 5,
				"mesh7Shape[0]": 6,
				"mesh8Shape[0]": 7,
				"mesh9Shape[0]": 8
			}

		}

	},

	numFiles: 4,
	check: function (){
	}
};
