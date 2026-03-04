// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "内容驱动型网站的Web框架",
		siteurl: "https://github.com/withastro/astro",
		tags: ["框架"],
	},
	{
		id: 2,
		title: "Fxup",
		imgurl: "http://tv.fxup.de/image/%E9%9C%B2%E6%98%93%E4%B8%9DQ%E7%89%88.png",
		desc: "记录技术成长，分享生活点滴。",
		siteurl: "https://fxup.de",
		tags: ["emm"],
	},
	{
		id: 3,
		title: "Vercel",
		imgurl: "https://avatars.githubusercontent.com/u/14985020?v=4&s=640",
		desc: "开发、预览、部署",
		siteurl: "https://vercel.com",
		tags: ["托管", "云服务"],
	},
	{
		id: 4,
		title: "Tailwind CSS",
		imgurl: "https://avatars.githubusercontent.com/u/67109815?v=4&s=640",
		desc: "实用优先的CSS框架，快速构建自定义设计",
		siteurl: "https://tailwindcss.com",
		tags: ["CSS", "框架"],
	},
	{
		id: 5,
		title: "TypeScript",
		imgurl: "https://avatars.githubusercontent.com/u/6154722?v=4&s=640",
		desc: "带类型语法的JavaScript",
		siteurl: "https://www.typescriptlang.org",
		tags: ["编程语言", "JavaScript"],
	},
	{
		id: 6,
		title: "React",
		imgurl: "https://avatars.githubusercontent.com/u/6412038?v=4&s=640",
		desc: "用于构建用户界面的JavaScript库",
		siteurl: "https://reactjs.org",
		tags: ["框架", "JavaScript"],
	},
	{
		id: 7,
		title: "GitHub",
		imgurl: "https://avatars.githubusercontent.com/u/9919?v=4&s=640",
		desc: "全球开发者构建软件的平台",
		siteurl: "https://github.com",
		tags: ["开发", "平台"],
	},
	{
		id: 8,
		title: "MDN Web 文档",
		imgurl: "https://avatars.githubusercontent.com/u/7565578?v=4&s=640",
		desc: "最全面的Web开发者参考资源",
		siteurl: "https://developer.mozilla.org",
		tags: ["文档", "参考"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
