#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float plot(vec2 st) {
	return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

void main(void) {
	vec2 st = gl_FragCoord.xy/u_resolution;

	float y = st.x;

	vec3 color = vec3(y);

	float pct = plot(st);
	color = (1.0-pct)*color + pct*vec3(0.0, 1.0, 0.0);

	gl_FragColor = vec4(color, 1.0);
}
