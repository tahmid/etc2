// camera control
// tx, ty and tz are camera target position
// rx, ry and rz are camera rotation values
// di is camera distance from target
// fr is resulting view matrix in row major (Float32Array(16))
function cameraControl(tx, ty, tz, rx, ry, rz, di, fr)
{
	var a = rx * 0.5;
	var b = ry * 0.5;
	var c = rz * 0.5;
	var d = Math.cos(a);
	var e = Math.sin(a);
	var f = Math.cos(b);
	var g = Math.sin(b);
	var h = Math.cos(c);
	var i = Math.sin(c);
	var j = f * e * h + g * d * i;
	var k = f * -e * i + g * d * h;
	var l = f * d * i - g * e * h;
	var m = f * d * h - g * -e * i;
	var n = j * j;
	var o = k * k;
	var p = l * l;
	var q = m * m;
	var r = j * k;
	var s = k * l;
	var t = j * l;
	var u = m * j;
	var v = m * k;
	var w = m * l;
	var x = q + n - o - p;
	var y = (r + w) * 2.0;
	var z = (t - v) * 2.0;
	var A = (r - w) * 2.0;
	var B = q - n + o - p;
	var C = (s + u) * 2.0;
	var D = (t + v) * 2.0;
	var E = (s - u) * 2.0;
	var F = q - n - o + p;
	var G = di;
	var H = -(tx + D * G);
	var I = -(ty + E * G);
	var J = -(tz + F * G);
	fr[0] = x;
	fr[1] = A;
	fr[2] = D;
	fr[3] = 0.0;
	fr[4] = y;
	fr[5] = B;
	fr[6] = E;
	fr[7] = 0.0;
	fr[8] = z;
	fr[9] = C;
	fr[10] = F;
	fr[11] = 0.0;
	fr[12] = x * H + y * I + z * J;
	fr[13] = A * H + B * I + C * J;
	fr[14] = D * H + E * I + F * J;
	fr[15] = 1.0; 
}
