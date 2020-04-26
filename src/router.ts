import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

import BlogEntries from './content/blog/contents.json';

const blogRoutes = Object.keys(BlogEntries).map(section => {
    const children = BlogEntries.blog.map(entry => ({
        path: entry.id,
        name: entry.id,
        component: () => import(`./content/blog/${section}/${entry.id}.md`)
    }));
    return {
        path: `/${section}`,
        name: section,
        component: () => import(`./views/Blog.vue`),
        children
    };
});

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/Projects.vue'),
    },
    ...blogRoutes
  ],
});
