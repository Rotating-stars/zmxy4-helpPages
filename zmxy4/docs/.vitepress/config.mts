import { defineConfig } from 'vitepress'
import { withSidebar } from "vitepress-sidebar"

// https://vitepress.dev/reference/site-config
const vitePressConfigs = {
	//标题
	title: "造梦西游4帮助文档",
	//站点描述
	description: "这是一个帮助你更好的玩造梦西游4的文档",
	head: [
		//网站图标
		['link', { rel: 'icon', href: '/logo/favicon.ico' }]
    ],
	//本地语言
	lang: "zh-CN",
	//如果计划将站点部署到https://foo.github.io/bar/ ，那么应该将base设置为'/bar/'
	base: '/zmxy4-helpPages/',
	//当设置为true时，将页面元数据提取到单独的JavaScript块中，而不是内联在初始HTML中。这使每个页面的HTML负载更小，
	//并使页面元数据可缓存，从而当站点中有很多页面时可以减少服务器带宽。
	metaChunk: true,
	
	
	//文档配置
	themeConfig: {
		//是否在markdown中的外部链接旁显示外部链接图标。
		externalLinkIcon: true,
		//搜索
		search: {
			provider: 'local',
			options: {
				locales: {
					root: {
						translations: {
							button: {
								buttonText: '搜索文档',
								buttonAriaLabel: '搜索文档',
							},
							modal: {
								displayDetails: '显示详细列表',
								noResultsText: '无相关结果',
								resetButtonTitle: '清除查询条件',
								footer: {
									selectText: '选择',
									selectKeyAriaLabel: '输入',
									navigateText: '切换',
									navigateUpKeyAriaLabel: '上箭头',
									navigateDownKeyAriaLabel: '下箭头',
									closeText: '关闭',
									closeKeyAriaLabel: 'Esc',
								}
							}
						}
					}
				}
			}
		},
		
		//页头导航菜单
		nav: [
			{ text: '主页', link: '/' },
			{ text: '测试按钮', link: '/zmxy' },
			{ text: '角色', items: [
				{ text: '孙悟空', link: '/角色/孙悟空' },
				{ text: '唐僧', link: '/角色/唐僧' },
				{ text: '猪八戒', link: '/角色/猪八戒' },
				{ text: '沙僧', link: '/角色/沙僧' },
				{ text: '小白龙', link: '/角色/小白龙' },
				{ text: '玉兔', link: '/角色/玉兔' },
				{ text: '哪吒', link: '/角色/哪吒' },
			]},
			{ text: '角色养成', items: [
				{ text: '装备', link: '/角色养成/装备' },
				{ text: '法宝', link: '/角色养成/法宝' },
				{ text: '称号', link: '/角色养成/称号' },
				{ text: '翅膀', link: '/角色养成/翅膀' },
				{ text: '宝石', link: '/角色养成/宝石' },
				{ text: '时装', link: '/角色养成/时装' },
				{ text: '魂器', link: '/角色养成/魂器' },
				{ text: '咒印', link: '/角色养成/咒印' },
				{ text: '易盘', link: '/角色养成/易盘' },
			]},
			{ text: '地图', items: [
				{ text: '南瞻部洲', link: '/地图/南瞻部洲' },
				{ text: '东胜神洲', link: '/地图/东胜神洲' },
				{ text: '北俱芦洲', link: '/地图/北俱芦洲' },
				{ text: '西牛贺洲', link: '/地图/西牛贺洲' },
				{ text: '弥天神域', link: '/地图/弥天神域' },
				{ text: '幽冥血海', link: '/地图/幽冥血海' },
			]},
			{ text: '宠物', items: [
				{ text: '南瞻部洲', link: '...' },
				{ text: '东胜神洲', link: '...' },
				{ text: '北俱芦洲', link: '...' },
				{ text: '西牛贺洲', link: '...' },
				{ text: '幽冥血海', link: '...' },
			]},
		],
		
		//深色模式开关标签，该标签仅在移动端视图中显示
		darkModeSwitchLabel: "浅色/深色",
		//悬停时显示的深色模式开关标题
		darkModeSwitchTitle: "深色",
		//悬停时显示的浅色模式开关标题
		lightModeSwitchTitle: "浅色",
		//页头链接
		socialLinks: [
			{ icon: 'bilibili', link: 'https://space.bilibili.com/293751618' },
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
		],
		//左侧侧边栏菜单标签，该标签仅在移动端视图中显示
		sidebarMenuLabel: "目录",
		sidebar: [
			{
				text: 'abcqwe',
				items: [
					{ text: '造梦西游4', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],
		//右侧侧边栏菜单标签
		outlineTitle: "页面导航",
		//返回顶部按钮的标签，该标签仅在移动端视图中显示
		returnToTopLabel: "回到顶部",
		//右侧侧边栏显示层级
		outline: [2,6],
		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium',
			},
		},
		//文档页尾标签自定义
		docFooter: {
			prev: '上一篇',
			next: '下一篇',
		},
		//主页页尾自定义
		footer: {
			message: '在 MIT 许可下发布',
			copyright: `版权所有 © 2026-5-24 --> ${new Date().toISOString().split('T')[0]} 青空`,
		},
		//404页面
		notFound: {
			title: "当前页面未找到",
			quote: "请返回有效页面",
			linkText: "返回首页",
		},
	}
};

const vitePressSidebarOptions = [
/*	{	
		//这是.vitepress目录所在的路径,如果项目根目录中文档所在的文件夹是 /docs，则该选项的值应设为 docs 或 /docs。
		documentRootPath: 'docs',
		
		//扫描指定目录的文件
		scanStartPath: 'zmxy',
		
		//为地址栏添加路径名
		resolvePath: '/zmxy/',
		
		//显示根目录的index.md文件
		includeRootIndexFile: true,
		
		//显示子目录的index.md文件
		includeFolderIndexFile: true,
		
		//以文件的Frontmatter中的title的值为标题，获取不到默认文件名
		useTitleFromFrontmatter: true,
		
		//子文件夹以文件的Frontmatter中的title的值为标题，获取不到默认文件名
		useFolderTitleFromIndexFile: true,
		
		//按frontmatter的order属性对菜单项排序。
		sortMenusByFrontmatterOrder: true,
		
		//如果为false,则创建菜单时所有分组都处于展开状态。如果为true,则创建菜单时所有分组都处于折叠状态。
		collapsed: true,
	}, */
	{
		documentRootPath: 'docs',
		scanStartPath: 'zmxy',
		resolvePath: '/zmxy/',
		sortMenusByFrontmatterOrder: true,
		frontmatterOrderDefaultValue: 999,
		collapsed: true,
		includeRootIndexFile: true,
		includeFolderIndexFile: true,
		useTitleFromFrontmatter: true,
	},
	{
		documentRootPath: 'docs',
		scanStartPath: '角色',
		resolvePath: '/角色/',
		sortMenusByFrontmatterOrder: true,
		frontmatterOrderDefaultValue: 999,
		collapsed: true,
		includeRootIndexFile: false,
		includeFolderIndexFile: true,
		useTitleFromFrontmatter: true,
	},
	{
		documentRootPath: 'docs',
		scanStartPath: '地图',
		resolvePath: '/地图/',
		collapsed: true,
		manualSortFileNameByPriority: ['南瞻部洲','东胜神洲','北俱芦洲','西牛贺洲','弥天神域','幽冥血海'],
		useFolderLinkFromIndexFile: true,
		sortMenusByFrontmatterOrder: true,
		frontmatterOrderDefaultValue: 999,
	},
];

export default defineConfig(withSidebar(vitePressConfigs, vitePressSidebarOptions));
