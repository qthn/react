// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/tanghong/Desktop/antdpro/ant-design-pro/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "name": "login",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__User__login' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/User/login'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/layouts/SecurityLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/layouts/BasicLayout'), loading: LoadingComponent}),
            "authority": [
              "admin",
              "user"
            ],
            "routes": [
              {
                "path": "/",
                "redirect": "/welcome",
                "exact": true
              },
              {
                "path": "/welcome",
                "name": "welcome",
                "icon": "smile",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/Welcome'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/admin",
                "name": "admin",
                "icon": "crown",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Admin' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/Admin'), loading: LoadingComponent}),
                "authority": [
                  "admin"
                ],
                "routes": [
                  {
                    "path": "/admin/sub-page",
                    "name": "sub-page",
                    "icon": "smile",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/Welcome'), loading: LoadingComponent}),
                    "authority": [
                      "admin"
                    ],
                    "exact": true
                  }
                ]
              },
              {
                "name": "list.table-list",
                "icon": "table",
                "path": "/list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TableList' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/TableList'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "哈哈哈",
                "icon": "table",
                "path": "/haha",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__haha' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/haha'), loading: LoadingComponent}),
                "routes": [
                  {
                    "path": "/haha/sub-page",
                    "name": "sub-page",
                    "icon": "smile",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Welcome' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/Welcome'), loading: LoadingComponent}),
                    "authority": [
                      "admin"
                    ],
                    "exact": true
                  }
                ]
              },
              {
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/404'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/tanghong/Desktop/antdpro/ant-design-pro/src/pages/404'), loading: LoadingComponent}),
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
