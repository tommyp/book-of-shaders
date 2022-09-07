#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main(void) {
	vec2 st = gl_FragCoord.st/u_resolution;
	gl_FragColor = vec4(st, 0.4 ,1.0);
}
