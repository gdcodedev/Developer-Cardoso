/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/projetos/gdsistemas.png',
		title: 'GD Sistemas',
		skills: ['VueJS', 'StyledComponents'],
		descripcion:
			'Desenvolvimento do sistema ERP para a GD Sistemas.',
		demoURL: 'https://gdsistemas.com.br/index.html',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/projetos/sodamnbright.png',
		title: 'SodamnBright',
		skills: ['VueJS', 'Bootstrap'],
		descripcion:
			' Site da banda So Damn Bright.',
		demoURL: 'https://sodamnbrightnew.vercel.app/',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/projetos/impetusgastronomia.png',
		title: 'Impetus Gastronomia',
		skills: ['Javascript', 'CSS', 'HTML'],
		descripcion:
			'Site desenvolvido para o Buffet Impetus Gastronomia.',
		demoURL: 'https://impetusgastronomia.com.br/',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/projetos/yggdrasil.png',
		title: 'Yggdrasil Green Engenieer',
		skills: ['Javascript', 'CSS', 'Bootstrap'],
		descripcion:
			'Site desenvolvido para a empresa Yggdrasil Green Engenieer.',
		demoURL: 'https://yggdrasil-green.vercel.app/',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/projetos/yumusick.png',
		title: 'Site da Yumusick',
		skills: ['React', 'CSS'],
		descripcion:
			'Site da Yumusick.',
		demoURL: 'https://www.yumusick.com/',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/projetos/developercardoso.png',
		title: 'Guilherme Cardoso',
		skills: ['AstroJS', 'StyledComponents'],
		descripcion:
			' Site desenvolvido para estudos do AstroJS.',
		demoURL: 'https://developer-cardoso.vercel.app/',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
