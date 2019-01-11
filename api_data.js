define({ "api": [
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/accountPeriodManager/addAccountPeriodInfo",
    "title": "添加账期信息",
    "name": "addAccountPeriodInfo",
    "group": "AccountPeriodManagerController",
    "description": "<p>添加账期信息及其关联信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "accountPeriodDto",
            "description": "<p>账期信息</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodCustomDtos",
            "description": "<p>账期客户关联信息</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "accountPeriodDto.accountPeriodCustomDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "accountPeriodDto.accountPeriodCustomDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodCustomDtos.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodCustomDtos.customType",
            "description": "<p>客户类型(&quot;BIG_CUSTOM&quot;/大客户，&quot;DEALER&quot;/经销商)</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodNodeDtos",
            "description": "<p>账期节点信息</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "accountPeriodDto.accountPeriodNodeDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "accountPeriodDto.accountPeriodNodeDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodNodeDtos.payNode",
            "description": "<p>付款节点，单位为月</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodNodeDtos.payRadio",
            "description": "<p>付款比例，单位为百分比</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodNodeDtos.periodOrder",
            "description": "<p>期数序号</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "accountPeriodDto.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "accountPeriodDto.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodDto.name",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "accountPeriodDto.validPeriod",
            "description": "<p>期数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{ \"accountPeriodDto\": { \"accountPeriodCustomDtos\": [ { \"createDate\": 0,\n\"createMan\": \"string\", \"customId\": \"string\", \"customType\": \"BIG_CUSTOM\" } ],\n\"accountPeriodNodeDtos\": [ { \"createDate\": 0, \"createMan\": \"string\", \"payNode\": 0, \"payRadio\":\n\"0.12345679\", \"periodOrder\": 0 } ], \"createDate\": 0, \"createMan\": \"string\", \"name\": \"string\",\n\"validPeriod\": 0 } }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "data.accountPeriodDto",
            "description": "<p>账期信息</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos",
            "description": "<p>账期客户关联信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.accountPeriodId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.customType",
            "description": "<p>客户类型(&quot;BIG_CUSTOM&quot;/大客户，&quot;DEALER&quot;/经销商)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.id",
            "description": "<p>账期客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos",
            "description": "<p>账期节点信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.accountPeriodId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.id",
            "description": "<p>账期节点标识</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.payNode",
            "description": "<p>付款节点，单位为月</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.payRadio",
            "description": "<p>付款比例，单位为百分比</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.periodOrder",
            "description": "<p>期数序号</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.accountPeriodDto.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.id",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.name",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.accountPeriodDto.validPeriod",
            "description": "<p>账期期限</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{ \"code\": \"string\", \"data\": { \"accountPeriodDto\": {\n\"accountPeriodCustomDtos\": [ { \"accountPeriodId\": \"string\", \"createDate\": 0, \"createMan\":\n\"string\", \"customId\": \"string\", \"customType\": \"BIG_CUSTOM\", \"id\": \"string\" } ],\n\"accountPeriodNodeDtos\": [ { \"accountPeriodId\": \"string\", \"createDate\": 0, \"createMan\":\n\"string\", \"id\": \"string\", \"payNode\": 0, \"payRadio\": 0, \"periodOrder\": 0 } ], \"createDate\": 0,\n\"createMan\": \"string\", \"id\": \"string\", \"name\": \"string\", \"validPeriod\": 0 } }, \"msg\":\n\"string\", \"responseTime\": \"2019-01-02T11:15:32.311Z\", \"status\": \"string\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107003",
            "description": "<p>account period is null</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107004",
            "description": "<p>valid period is null</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107005",
            "description": "<p>empty account period name</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107006",
            "description": "<p>empty account period nodes</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107007",
            "description": "<p>fail to add account period</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/AccountPeriodManagerController.java",
    "groupTitle": "AccountPeriodManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/accountPeriodManager/deleteAccountPeriodInfo/{accountPeriodId}",
    "title": "删除账期方式",
    "name": "deleteAccountPeriodInfo",
    "group": "AccountPeriodManagerController",
    "description": "<p>删除账期方式，及其关联信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodId",
            "description": "<p>账期标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-04T06:15:35.133Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107001",
            "description": "<p>account period id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107010",
            "description": "<p>fail to delete account period</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/AccountPeriodManagerController.java",
    "groupTitle": "AccountPeriodManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-order-rest/accountPeriodManager/getAccountPeriodInfo/{accountPeriodId}",
    "title": "查询账期方式信息",
    "name": "getAccountPeriodInfo",
    "group": "AccountPeriodManagerController",
    "description": "<p>查询账期方式信息及其关联信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodId",
            "description": "<p>账期标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.accountPeriodNodeVos",
            "description": "<p>账期节点信息</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.accountPeriodNodeVos.payNode",
            "description": "<p>付款节点，单位为月</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": true,
            "field": "data.accountPeriodNodeVos.payRadio",
            "description": "<p>付款比例，单位为百分比</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.accountPeriodNodeVos.periodOrder",
            "description": "<p>期数序号</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.bigCustomVos",
            "description": "<p>大客户信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.bigCustomVos.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.bigCustomVos.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.id",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.name",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.saleDealerVos",
            "description": "<p>经销商信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.saleDealerVos.customId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.saleDealerVos.customName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.validPeriod",
            "description": "<p>账期期限</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{ \"code\": \"string\", \"data\": { \"accountPeriodNodeVos\": [ { \"payNode\":\n0, \"payRadio\": 0, \"periodOrder\": 0 } ], \"bigCustomVos\": [ { \"customId\": \"string\",\n\"customName\": \"string\" } ], \"id\": \"string\", \"name\": \"string\", \"saleDealerVos\": [ { \"customId\":\n\"string\", \"customName\": \"string\" } ], \"validPeriod\": 0 }, \"msg\": \"string\", \"responseTime\":\n\"2019-01-03T06:35:20.855Z\", \"status\": \"string\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107001",
            "description": "<p>account period id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107008",
            "description": "<p>fail to get account period</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/AccountPeriodManagerController.java",
    "groupTitle": "AccountPeriodManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/accountPeriodManager/listAccountPeriodInfos",
    "title": "分页查询账期方式信息",
    "name": "listAccountPeriodInfos",
    "group": "AccountPeriodManagerController",
    "description": "<p>分页查询账期方式信息及其关联信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>分页页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.accountPeriodName",
            "description": "<p>账期名称，模糊匹配</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "query.vaildPeriod",
            "description": "<p>账期权限</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n  \"page\": 1,\n  \"query\": {\n    \"accountPeriodName\": \"string\",\n    \"vaildPeriod\": 0\n  },\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"createDate\": \"desc\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.current_page",
            "description": "<p>当前页</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.list",
            "description": "<p>返回数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.list.accountNum",
            "description": "<p>账期数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.accountPeriodId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.accountPeriodName",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.list.lastUpdateDate",
            "description": "<p>最新更新时间，若没更新过，则取创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.list.validPeriod",
            "description": "<p>账期期限</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.per_page",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{ \"code\": \"string\", \"data\": { \"current_page\": 0, \"list\": [ {\n\"accountNum\": 0, \"accountPeriodId\": \"string\", \"accountPeriodName\": \"string\", \"lastUpdateDate\":\n0, \"validPeriod\": 0 } ], \"per_page\": 0, \"count\": 0 }, \"msg\": \"string\", \"responseTime\":\n\"2019-01-03T09:47:28.923Z\", \"status\": \"string\" }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107008",
            "description": "<p>fail to get account period</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/AccountPeriodManagerController.java",
    "groupTitle": "AccountPeriodManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/accountPeriodManager/modifyAccountPeriodInfo",
    "title": "编辑账期方式信息",
    "name": "modifyAccountPeriodInfo",
    "group": "AccountPeriodManagerController",
    "description": "<p>编辑账期方式信息，及其关联信息</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "accountPeriodDto",
            "description": "<p>账期信息</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodCustomDtos",
            "description": "<p>账期客户关联信息</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "accountPeriodDto.accountPeriodCustomDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "accountPeriodDto.accountPeriodCustomDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodCustomDtos.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodCustomDtos.customType",
            "description": "<p>客户类型(&quot;BIG_CUSTOM&quot;/大客户，&quot;DEALER&quot;/经销商)</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodNodeDtos",
            "description": "<p>账期节点信息</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "accountPeriodDto.accountPeriodNodeDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "accountPeriodDto.accountPeriodNodeDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodNodeDtos.payNode",
            "description": "<p>付款节点，单位为月</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodNodeDtos.payRadio",
            "description": "<p>付款比例，单位为百分比</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "accountPeriodDto.accountPeriodNodeDtos.periodOrder",
            "description": "<p>账期期数序号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodDto.id",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "accountPeriodDto.name",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "accountPeriodDto.updateDate",
            "description": "<p>更新日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "accountPeriodDto.updateMan",
            "description": "<p>更新者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "accountPeriodDto.validPeriod",
            "description": "<p>账期期限</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"accountPeriodDto\": {\n    \"accountPeriodCustomDtos\": [\n      {\n        \"createDate\": 0,\n        \"createMan\": \"string\",\n        \"customId\": \"string\",\n        \"customType\": \"BIG_CUSTOM\",\n      }\n    ],\n    \"accountPeriodNodeDtos\": [\n      {\n        \"payNode\": 0,\n        \"payRadio\": \"0.123456789\",\n        \"periodOrder\": 0,\n      }\n    ],\n    \"id\": \"string\",\n    \"name\": \"string\",\n    \"updateDate\": 0,\n    \"updateMan\": \"string\",\n    \"validPeriod\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "data.accountPeriodDto",
            "description": "<p>账期方式</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos",
            "description": "<p>账期客户关联信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.accountPeriodId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.customType",
            "description": "<p>客户类型(&quot;BIG_CUSTOM&quot;/大客户，&quot;DEALER&quot;/经销商)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodCustomDtos.id",
            "description": "<p>账期客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos",
            "description": "<p>账期节点信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.accountPeriodId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.id",
            "description": "<p>账期节点标识</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.payNode",
            "description": "<p>付款节点</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.payRadio",
            "description": "<p>付款比例</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.accountPeriodDto.accountPeriodNodeDtos.periodOrder",
            "description": "<p>账期期数序号</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.accountPeriodDto.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.id",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.name",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.accountPeriodDto.updateDate",
            "description": "<p>更新日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.accountPeriodDto.updateMan",
            "description": "<p>更新者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": true,
            "field": "data.accountPeriodDto.validPeriod",
            "description": "<p>账期期限</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"accountPeriodDto\": {\n      \"accountPeriodCustomDtos\": [\n        {\n          \"accountPeriodId\": \"string\",\n          \"createDate\": 0,\n          \"createMan\": \"string\",\n          \"customId\": \"string\",\n          \"customType\": \"BIG_CUSTOM\",\n          \"id\": \"string\",\n        }\n      ],\n      \"accountPeriodNodeDtos\": [\n        {\n          \"accountPeriodId\": \"string\",\n          \"createDate\": 0,\n          \"createMan\": \"string\",\n          \"id\": \"string\",\n          \"payNode\": 0,\n          \"payRadio\": 0,\n          \"periodOrder\": 0,\n        }\n      ],\n      \"createDate\": 0,\n      \"createMan\": \"string\",\n      \"id\": \"string\",\n      \"name\": \"string\",\n      \"updateDate\": 0,\n      \"updateMan\": \"string\",\n      \"validPeriod\": 0\n    }\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-04T03:37:00.805Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107003",
            "description": "<p>account period is null</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107001",
            "description": "<p>account period not exist</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107004",
            "description": "<p>valid period is null</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107005",
            "description": "<p>empty account period name</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107006",
            "description": "<p>empty account period nodes</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20107009",
            "description": "<p>fail to update account period</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/AccountPeriodManagerController.java",
    "groupTitle": "AccountPeriodManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterManager/addMarketCenterManger",
    "title": "添加营销中心",
    "name": "addmarketCenterManger",
    "group": "MarketCenterManagerController",
    "description": "<p>添加营销中心</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "marketCenterDto",
            "description": "<p>营销中心对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.code",
            "description": "<p>营销中心编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.contactNumber",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "marketCenterDto.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "marketCenterDto.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.name",
            "description": "<p>营销中心名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.responsibleMan",
            "description": "<p>负责人</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK\n{\n\t  \"responseTime\": \"2019-01-03T07:51:32.136+0000\",\n\t  \"code\": \"000000\",\n\t  \"status\": \"200\",\n\t  \"msg\": \"请求成功\",\n\t  \"data\": {\n\t    \"marketCenterDto\": {\n\t      \"name\": \"张三\",\n\t      \"code\": \"云智易01\",\n\t      \"responsibleMan\": \"李四\",\n\t      \"contactNumber\": \"18273412365\",\n\t      \"id\": \"5c2dbf046f729b63c032aa67\",\n\t      \"createDate\": 1546501892048,\n\t      \"createMan\": \"-1\"\n\t    }\n\t  }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110001",
            "description": "<p>marketcenter is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110002",
            "description": "<p>marketcenter add  fail</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110006",
            "description": "<p>marketcenter name is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110007",
            "description": "<p>marketcenter code is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterManagerController.java",
    "groupTitle": "MarketCenterManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/v1/xlink-order-rest/marketCenterManager/findMarketCenterMangerById/{id}",
    "title": "根据id查询营销中心",
    "name": "findMarketCenterMangerById",
    "group": "MarketCenterManagerController",
    "description": "<p>根据id查询营销中心</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>营销中心标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回对象</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.marketCenterDto",
            "description": "<p>营销中心对象</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.code",
            "description": "<p>营销中心编号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.contactNumber",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.marketCenterDto.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.id",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.name",
            "description": "<p>营销中心名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.responsibleMan",
            "description": "<p>负责人</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.marketCenterDto.updateDate",
            "description": "<p>更新日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.updateMan",
            "description": "<p>更新者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK\n{\n\t  \"responseTime\": \"2019-01-03T08:29:29.448+0000\",\n\t  \"code\": \"000000\",\n\t  \"status\": \"200\",\n\t  \"msg\": \"请求成功\",\n\t  \"data\": {\n\t    \"marketCenterDto\": {\n\t      \"name\": \"张三\",\n\t      \"code\": \"云智易01\",\n\t      \"responsibleMan\": \"李四\",\n\t      \"contactNumber\": \"18273418265\",\n\t      \"id\": \"5c2dbf046f729b63c032aa67\",\n\t      \"createDate\": 1546501892048,\n\t      \"createMan\": \"-1\",\n\t      \"updateDate\": null,\n\t      \"updateMan\": null\n\t    }\n\t  }\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110004",
            "description": "<p>marketcenter query fail</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110008",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterManagerController.java",
    "groupTitle": "MarketCenterManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterManager/listMarketCenters",
    "title": "营销中心分页查询",
    "name": "listMarketCenters",
    "group": "MarketCenterManagerController",
    "description": "<p>营销中心分页查询</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>分页查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名称 marketCenterName/createManName</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryValue",
            "description": "<p>查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n  \"page\": 1,\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"createDate\": \"desc\"\n    }\n  ],\n  \"query\": {\n    \"queryFieldName\": \"createManName\",\n    \"queryValue\": \"h\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据集合对象</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.createManName",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.marketCenterName",
            "description": "<p>营销中心名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK\n{\n   \"responseTime\": \"2019-01-10T09:20:30.193+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"marketCenterId\": \"111222000000000000000000\",\n         \"marketCenterName\": \"贺春宏\",\n         \"createDate\": 1546680210313,\n         \"createMan\": \"1207d2b5aa9f0200\",\n         \"createManName\": \"hyhtest\"\n       }\n     ],\n     \"count\": 1,\n     \"current_page\": 0,\n     \"per_page\": 10\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110001",
            "description": "<p>marketcenter is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110009",
            "description": "<p>marketcenter queryFieldName id empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110010",
            "description": "<p>marketcenter fail to page query</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterManagerController.java",
    "groupTitle": "MarketCenterManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterManager/updateMarketCenterManger",
    "title": "编辑营销中心",
    "name": "updateMarketCenterManger",
    "group": "MarketCenterManagerController",
    "description": "<p>编辑营销中心</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "marketCenterDto",
            "description": "<p>营销中心对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.code",
            "description": "<p>营销中心编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.contactNumber",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.id",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.name",
            "description": "<p>营销中心名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDto.responsibleMan",
            "description": "<p>负责人</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "data.marketCenterDto.updateDate",
            "description": "<p>更新日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "data.marketCenterDto.updateMan",
            "description": "<p>更新者标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n  \"marketCenterDto\": {\n    \"id\": \"5c2dbef96f729b63c032aa66\",\n    \"name\": \"李四\",\n    \"code\": \"002\",\n    \"responsibleMan\": \"张三\",\n    \"contactNumber\": \"13762438921\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data.marketCenterDto",
            "description": "<p>返回数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.code",
            "description": "<p>营销中心编号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.contactNumber",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.id",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.name",
            "description": "<p>营销中心名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.responsibleMan",
            "description": "<p>负责人</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.marketCenterDto.updateDate",
            "description": "<p>更新日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDto.updateMan",
            "description": "<p>更新者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK\n{\n\t  \"responseTime\": \"2019-01-03T08:49:08.408+0000\",\n\t  \"code\": \"000000\",\n\t  \"status\": \"200\",\n\t  \"msg\": \"请求成功\",\n\t  \"data\": {\n\t    \"marketCenterDto\": {\n\t      \"name\": \"李四\",\n\t      \"code\": \"002\",\n\t      \"responsibleMan\": \"张三\",\n\t      \"contactNumber\": \"13762438921\",\n\t      \"id\": \"5c2dbef96f729b63c032aa66\",\n\t      \"updateDate\": 1546505348341,\n\t      \"updateMan\": \"-1\",\n\t    }\n\t  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110001",
            "description": "<p>marketcenter is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110005",
            "description": "<p>marketcenter update fail</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110008",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterManagerController.java",
    "groupTitle": "MarketCenterManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/deleteMarketCenterCustomerRelations",
    "title": "批量删除营销中心大客户关联",
    "name": "deleteMarketCenterCustomerRelations",
    "group": "MarketCenterUserManagerController",
    "description": "<p>批量删除营销中心大客户关联</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "no-name",
            "description": "<p>关联标识数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n[\n  \"string\"\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-04T09:27:24.792Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111002",
            "description": "<p>empty market center user ids</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111001",
            "description": "<p>fail to delete market center user</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/deleteMarketCenterDealerRelations",
    "title": "批量删除营销中心经销商关联",
    "name": "deleteMarketCenterDealerRelations",
    "group": "MarketCenterUserManagerController",
    "description": "<p>批量删除营销中心经销商关联</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "no-name",
            "description": "<p>关联标识数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n[\n  \"string\"\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-04T09:27:24.792Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111002",
            "description": "<p>empty market center user ids</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111001",
            "description": "<p>fail to delete market center user</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/deleteMarketCenterPersonRelations",
    "title": "批量删除营销中心人员关联",
    "name": "deleteMarketCenterPersonRelations",
    "group": "MarketCenterUserManagerController",
    "description": "<p>批量删除营销中心人员关联</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": false,
            "field": "no-name",
            "description": "<p>关联标识数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n[\n  \"string\"\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-04T09:27:24.792Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111002",
            "description": "<p>empty market center user ids</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111001",
            "description": "<p>fail to delete market center user</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/listMarketCenterCustomers",
    "title": "分页查询营销中心大客户列表",
    "name": "listMarketCenterCustomers",
    "group": "MarketCenterUserManagerController",
    "description": "<p>分页查询营销中心大客户列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码，从1开始</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateEnd",
            "description": "<p>创建日期起点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateStart",
            "description": "<p>创建日期结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名称 customName/contactMan/contactNumber</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>查询值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"query\": {\n    \"createDateEnd\": 111111,\n    \"createDateStart\": 222222,\n    \"marketCenterId\": \"string\",\n    \"queryFieldName\": \"contactMan\",\n    \"queryValue\": \"string\"\n  },\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"desc\"\n    }\n    {\n      \"additionalProp2\": \"asc\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.contactMan",
            "description": "<p>联系人名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.contactNumber",
            "description": "<p>联系号码</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.list.createDate",
            "description": "<p>关联日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.id",
            "description": "<p>关联标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"contactMan\": \"string\",\n        \"contactNumber\": \"string\",\n        \"createDate\": 0,\n        \"customId\": \"string\",\n        \"customName\": \"string\",\n        \"id\": \"string\",\n        \"marketCenterId\": \"string\"\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-08T11:54:17.221Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110009",
            "description": "<p>marketcenter queryFieldName id empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110008",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20113003",
            "description": "<p>fail to list market center customers</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/listMarketCenterDealers",
    "title": "分页查询营销中心关联经销商",
    "name": "listMarketCenterDealers",
    "group": "MarketCenterUserManagerController",
    "description": "<p>分页查询营销中心关联经销商</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询条件</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateEnd",
            "description": "<p>创建结束日期</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateStart",
            "description": "<p>创建开始日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名  dealerName/contactMan/contactNumber/dealerCode</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"query\": {\n    \"createDateEnd\": 111111,\n    \"createDateStart\": 222222,\n    \"marketCenterId\": \"155555\",\n    \"queryFieldName\": \"dealerName\",\n    \"queryValue\": \"\"\n  },\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"desc\"\n    }\n    {\n      \"additionalProp2\": \"asc\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回对象</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总时</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.contactMan",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.contactNumber",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>关联标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n{\n   \"code\": \"string\",\n   \"data\": {\n     \"count\": 0,\n     \"list\": [\n       {\n         \"contactMan\": \"string\",\n         \"contactNumber\": \"string\",\n         \"createDate\": 0,\n         \"dealerCode\": \"string\",\n         \"dealerId\": \"string\",\n         \"dealerName\": \"string\",\n         \"id\": \"string\",\n         \"marketCenterId\": \"string\"\n       }\n     ]\n   },\n   \"msg\": \"string\",\n   \"responseTime\": \"2019-01-11T07:17:31.892Z\",\n   \"status\": \"string\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110008",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110009",
            "description": "<p>marketcenter queryFieldName id empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112005",
            "description": "<p>fail to list market center dealers</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/listMarketCenterPersons",
    "title": "分页查询营销中心人员列表",
    "name": "listMarketCenterPersons",
    "group": "MarketCenterUserManagerController",
    "description": "<p>分页查询营销中心人员列表</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "page",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>查询条件对象</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateEnd",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.createDateStart",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryFieldName",
            "description": "<p>查询字段 personName/cellPhone/email</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页面大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"page\": 1,\n  \"query\": {\n    \"createDateEnd\": 111111,\n    \"createDateStart\": 222222,\n    \"marketCenterId\": \"1112211\",\n    \"queryFieldName\": \"personName\",\n    \"queryValue\": \"\"\n  },\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"additionalProp1\": \"desc\"\n    }\n    {\n      \"additionalProp2\": \"asc\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.count",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.list",
            "description": "<p>数据列表</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.cellPhone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.department",
            "description": "<p>所在部门</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>关联标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.personName",
            "description": "<p>人员姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.psrsonId",
            "description": "<p>人员标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n* {\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"cellPhone\": \"string\",\n        \"createDate\": 0,\n        \"department\": \"string\",\n        \"email\": \"string\",\n        \"id\": \"string\",\n        \"marketCenterId\": \"string\",\n        \"personName\": \"string\",\n        \"psrsonId\": \"string\"\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-08T11:54:17.221Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110008",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110009",
            "description": "<p>marketcenter queryFieldName id empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111005",
            "description": "<p>fail to list market center persons</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/relateMarketCenterCustomers",
    "title": "批量关联大客户至营销中心",
    "name": "relateMarketCenterCustomers",
    "group": "MarketCenterUserManagerController",
    "description": "<p>批量关联大客户至营销中心</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "marketCenterCustomerDtos",
            "description": "<p>营销中心大客户关联对象</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterCustomerDtos.contactMan",
            "description": "<p>联系人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterCustomerDtos.contactNumber",
            "description": "<p>联系号码</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "marketCenterCustomerDtos.createDate",
            "description": "<p>创建日期，关联日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "marketCenterCustomerDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterCustomerDtos.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterCustomerDtos.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterCustomerDtos.marketCenterId",
            "description": "<p>营销中心标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"marketCenterCustomerDtos\": [\n    {\n      \"contactMan\": \"string\",\n      \"contactNumber\": \"string\",\n      \"createDate\": 0,\n      \"createMan\": \"string\",\n      \"customId\": \"string\",\n      \"customName\": \"string\",\n      \"marketCenterId\": \"string\",\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": true,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": true,
            "field": "data.marketCenterCustomerDtos",
            "description": "<p>营销中心大客户关联对象</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.marketCenterCustomerDtos.contactMan",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.marketCenterCustomerDtos.contactNumber",
            "description": "<p>联系号码</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": true,
            "field": "data.marketCenterCustomerDtos.createDate",
            "description": "<p>创建日期，关联日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.marketCenterCustomerDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.marketCenterCustomerDtos.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.marketCenterCustomerDtos.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.marketCenterCustomerDtos.id",
            "description": "<p>关联标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.marketCenterCustomerDtos.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n  \"code\": \"string\",\n  \"data\": {\n    \"marketCenterCustomerDtos\": [\n      {\n        \"contactMan\": \"string\",\n        \"contactNumber\": \"string\",\n        \"createDate\": 0,\n        \"createMan\": \"string\",\n        \"customId\": \"string\",\n        \"customName\": \"string\",\n        \"marketCenterId\": \"string\",\n      }\n    ]\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-08T12:01:17.574Z\",\n  \"status\": \"string\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "10000001",
            "description": "<p>空参数</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110008",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20113001",
            "description": "<p>exist empty custom id</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111007",
            "description": "<p>fail to relation market center big customer</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/relationMarketCentersDealers",
    "title": "批量关联经销商至营销中心",
    "name": "relationMarketCentersDealers",
    "group": "MarketCenterUserManagerController",
    "description": "<p>批量关联经销商至营销中心</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "marketCenterDealerDtos",
            "description": "<p>经销商关联营销中心对象数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDealerDtos.contactMan",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDealerDtos.contactNumber",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "marketCenterDealerDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "marketCenterDealerDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDealerDtos.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDealerDtos.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDealerDtos.dealerCode",
            "description": "<p>经销商编号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterDealerDtos.marketCenterId",
            "description": "<p>营销中心标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"marketCenterDealerDtos\": [\n     {\n       \"contactMan\": \"张三\",\n       \"contactNumber\": \"15423176521\",\n       \"dealerId\": \"zcewsdaqwerw\",\n       \"dealerName\": \"沁园/中国广州\",\n       \"marketCenterId\": \"zxxccvfdere\",\n       \"dealerCode\": \"89001\"\n     },{\n       \"contactMan\": \"李四\",\n       \"contactNumber\": \"16524132634\",\n       \"dealerId\": \"uytrederfr\",\n       \"dealerName\": \"沁园/中国深圳\",\n       \"marketCenterId\": \"oki7yy76t65rre\",\n       \"dealerCode\": \"89002\"\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.marketCenterDealerDtos",
            "description": "<p>经销商关联营销中心对象数组</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDealerDtos.contactMan",
            "description": "<p>联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDealerDtos.contactNumber",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.marketCenterDealerDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDealerDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDealerDtos.dealerId",
            "description": "<p>经销商标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDealerDtos.dealerName",
            "description": "<p>经销商名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDealerDtos.dealerCode",
            "description": "<p>经销商编号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDealerDtos.id",
            "description": "<p>关联标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterDealerDtos.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-11T03:25:02.929+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"marketCenterDealerDtos\": [\n       {\n         \"marketCenterId\": \"zxxccvfdere\",\n         \"dealerId\": \"zcewsdaqwerw\",\n         \"dealerName\": \"沁园/中国广州\",\n         \"contactMan\": \"张三\",\n         \"contactNumber\": \"15423176521\",\n         \"dealerCode\": \"89001\",\n         \"id\": \"5c380c8ee5039337e4d30f60\",\n         \"createDate\": 1547177102338,\n         \"createMan\": \"-1\"\n       },\n       {\n         \"marketCenterId\": \"oki7yy76t65rre\",\n         \"dealerId\": \"uytrederfr\",\n         \"dealerName\": \"沁园/中国深圳\",\n         \"contactMan\": \"李四\",\n         \"contactNumber\": \"16524132634\",\n         \"dealerCode\": \"89002\",\n         \"id\": \"5c380c8ee5039337e4d30f61\",\n         \"createDate\": 1547177102339,\n         \"createMan\": \"-1\"\n       }\n     ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112001",
            "description": "<p>marketcenterdealer is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112002",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112003",
            "description": "<p>dealer id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112004",
            "description": "<p>fail to list market center dealers</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/v1/xlink-order-rest/marketCenterUser/relationMarketCentersPersons",
    "title": "批量关联营销中心人员",
    "name": "relationMarketCentersPersons",
    "group": "MarketCenterUserManagerController",
    "description": "<p>批量关联营销中心人员</p>",
    "permission": [
      {
        "name": "userOnly"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": false,
            "field": "marketCenterPersonDtos",
            "description": "<p>营销中心人员数组</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterPersonDtos.cellPhone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "marketCenterPersonDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "marketCenterPersonDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterPersonDtos.department",
            "description": "<p>所在部门</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterPersonDtos.email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterPersonDtos.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterPersonDtos.personId",
            "description": "<p>人员标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "marketCenterPersonDtos.personName",
            "description": "<p>人员姓名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"marketCenterPersonDtos\": [\n     {\n       \"cellPhone\": \"13443216543\",\n       \"department\": \"研发部\",\n       \"marketCenterId\": \"qwert\",\n       \"personId\": \"zsw21qe2w\",\n       \"personName\": \"张三\",\n       \"email\":\"1564324513@qq.com\"\n     },{\n       \"cellPhone\": \"13443216543\",\n       \"department\": \"人事部\",\n       \"marketCenterId\": \"11hy6tfs\",\n       \"personId\": \"qwertyuip\",\n       \"personName\": \"李四\",\n       \"email\":\"987654565@qq.com\"\n     }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>返回编码</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.marketCenterPersonDtos",
            "description": "<p>营销中心人员数组</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterPersonDtos.cellPhone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.marketCenterPersonDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterPersonDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterPersonDtos.department",
            "description": "<p>所在部门</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterPersonDtos.id",
            "description": "<p>关联标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterPersonDtos.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterPersonDtos.personId",
            "description": "<p>人员标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterPersonDtos.personName",
            "description": "<p>人员姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterPersonDtos.email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "responseTime",
            "description": "<p>返回响应时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>响应状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-11T02:36:39.726+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"marketCenterPersonDtos\": [\n       {\n         \"marketCenterId\": \"qwert\",\n         \"personId\": \"zsw21qe2w\",\n         \"personName\": \"张三\",\n         \"cellPhone\": \"13443216543\",\n         \"department\": \"研发部\",\n         \"email\":\"1564324513@qq.com\",\n         \"id\": \"5c380137e5039337e4d30f5e\",\n         \"createDate\": 1547174199657,\n         \"createMan\": \"-1\"\n       },\n       {\n         \"marketCenterId\": \"11hy6tfs\",\n         \"personId\": \"qwertyuip\",\n         \"personName\": \"李四\",\n         \"cellPhone\": \"13443216543\",\n         \"department\": \"人事部\",\n         \"email\":\"987654565@qq.com\",\n         \"id\": \"5c380137e5039337e4d30f5f\",\n         \"createDate\": 1547174199657,\n         \"createMan\": \"-1\"\n       }\n     ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "错误码详情": [
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111001",
            "description": "<p>marketcenterperson is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111002",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111003",
            "description": "<p>person id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111004",
            "description": "<p>fail to relation market center person</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "000000",
            "description": "<p>请求成功</p>"
          }
        ],
        "错误格式说明": [
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "msg",
            "description": "<p>接口返回的错误信息</p>"
          },
          {
            "group": "errorFormat",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"responseTime\": \"2019-01-02T09:47:15.032+0000\",\n    \"code\": \"20107007\",\n    \"status\": \"200\",\n    \"msg\": \"fail to add account period\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/MarketCenterUserManagerController.java",
    "groupTitle": "MarketCenterUserManagerController",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Access-Token",
            "description": "<p>xlink平台颁发的凭证</p>"
          },
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Access-Token\":\"访问凭证\",\n\"Content-Type\":\"application/json\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });