// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // 留空表示当前
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify 图标名称
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "计算机科学与技术专业在读",
		description:
			"目前就读于计算机科学与技术专业，专注于Web开发和软件工程方向。",
		type: "education",
		startDate: "2022-09-01",
		location: "北京",
		organization: "北京理工大学",
		skills: ["Java", "Python", "JavaScript", "HTML/CSS", "MySQL"],
		achievements: [
			"当前绩点：3.6/4.0",
			"完成数据结构与算法课程设计",
			"参与多个课程项目开发",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "mizuki-blog-project",
		title: "Mizuki 个人博客项目",
		description:
			"使用 Astro 框架开发的个人博客网站，作为学习前端技术的实践项目。",
		type: "project",
		startDate: "2024-06-01",
		endDate: "2024-08-01",
		skills: ["Astro", "TypeScript", "Tailwind CSS", "Git"],
		achievements: [
			"掌握现代前端开发技术栈",
			"学习响应式设计与用户体验优化",
			"完成从设计到部署的完整流程",
		],
		links: [
			{
				name: "GitHub 仓库",
				url: "https://github.com/example/mizuki-blog",
				type: "project",
			},
			{
				name: "在线演示",
				url: "https://mizuki-demo.example.com",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "summer-internship-2024",
		title: "前端开发实习生",
		description:
			"暑期在互联网公司实习，参与Web应用的前端开发工作。",
		type: "work",
		startDate: "2024-07-01",
		endDate: "2024-08-31",
		location: "北京",
		organization: "TechStart 互联网公司",
		position: "前端开发实习生",
		skills: ["React", "JavaScript", "CSS3", "Git", "Figma"],
		achievements: [
			"完成用户界面组件开发",
			"学习团队协作与代码规范",
			"获得优秀实习表现证书",
		],
		icon: "material-symbols:work",
		color: "#DC2626",
		featured: true,
	},
	{
		id: "web-development-course",
		title: "完成Web开发在线课程",
		description:
			"完成全栈Web开发在线课程，系统学习前后端开发技术。",
		type: "achievement",
		startDate: "2024-01-15",
		endDate: "2024-05-30",
		organization: "慕课网",
		skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
		achievements: [
			"获得课程结业证书",
			"完成5个实战项目",
			"掌握全栈开发基础",
		],
		links: [
			{
				name: "课程证书",
				url: "https://certificates.example.com/web-dev",
				type: "certificate",
			},
		],
		icon: "material-symbols:verified",
		color: "#059669",
	},
	{
		id: "student-management-system",
		title: "学生管理系统课程设计",
		description:
			"数据库课程的期末项目，开发了完整的学生信息管理系统。",
		type: "project",
		startDate: "2023-11-01",
		endDate: "2023-12-15",
		skills: ["Java", "MySQL", "Swing", "JDBC"],
		achievements: [
			"获得优秀课程设计评分",
			"实现完整的增删改查功能",
			"学习数据库设计与优化",
		],
		icon: "material-symbols:database",
		color: "#EA580C",
	},
	{
		id: "programming-contest",
		title: "校级编程竞赛",
		description:
			"参加学校举办的编程竞赛，提升算法和编程能力。",
		type: "achievement",
		startDate: "2023-10-20",
		location: "北京理工大学",
		organization: "计算机学院",
		skills: ["C++", "算法", "数据结构"],
		achievements: [
			"获得校级竞赛三等奖",
			"提升算法思维能力",
			"加强编程基本功",
		],
		icon: "material-symbols:emoji-events",
		color: "#7C3AED",
	},
	{
		id: "part-time-tutor",
		title: "兼职编程家教",
		description:
			"为高中生提供编程辅导，帮助他们学习Python基础。",
		type: "work",
		startDate: "2023-09-01",
		endDate: "2024-01-31",
		position: "编程家教",
		skills: ["Python", "教学", "沟通"],
		achievements: [
			"帮助3名学生掌握Python基础",
			"提升表达和沟通能力",
			"积累教学经验",
		],
		icon: "material-symbols:school",
		color: "#059669",
	},
	{
		id: "high-school-graduation",
		title: "高中毕业",
		description:
			"以优异成绩从高中毕业，被北京理工大学计算机科学与技术专业录取。",
		type: "education",
		startDate: "2019-09-01",
		endDate: "2022-06-30",
		location: "山东济南",
		organization: "济南第一中学",
		achievements: [
			"高考成绩：620分",
			"获得市级三好学生称号",
			"数学竞赛获省级二等奖",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "first-programming-experience",
		title: "初次编程体验",
		description:
			"在高中信息技术课上第一次接触编程，开始学习Python基本语法。",
		type: "education",
		startDate: "2021-03-01",
		skills: ["Python", "基础编程概念"],
		achievements: [
			"完成第一个\"Hello World\"程序",
			"学习基本循环和条件语句",
			"对编程产生兴趣",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
	},
];

// 获取时间线统计数据
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education")
			.length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// 获取精选时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() -
				new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
