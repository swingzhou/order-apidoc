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
            "field": "20107011",
            "description": "<p>账期名称重复</p>"
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
            "field": "query.name",
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
          "content": "{\n  \"page\": 1,\n  \"query\": {\n    \"name\": \"string\",\n    \"vaildPeriod\": 0\n  },\n  \"size\": 10,\n  \"sort\": [\n    {\n      \"updateDate\": \"desc\"\n    }\n  ]\n}",
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
            "field": "data.list.id",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": true,
            "field": "data.list.name",
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
          "content": "{ \"code\": \"string\", \"data\": { \"list\": [ {\n\"accountNum\": 0, \"id\": \"string\", \"name\": \"string\", \"lastUpdateDate\":\n0, \"validPeriod\": 0 } ], \"count\": 0 }, \"msg\": \"string\", \"responseTime\":\n\"2019-01-03T09:47:28.923Z\", \"status\": \"string\" }",
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
    "url": "/v1/xlink-order-rest/cashPool/addCashPoolAdjustRequest",
    "title": "添加资金池调整申请",
    "name": "addCashPoolAdjustRequest",
    "group": "CashPoolRestController",
    "description": "<p>添加资金池调整申请</p>",
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
            "field": "changeType",
            "description": "<p>调整类型(ADD/增加 SUB减少)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customType",
            "description": "<p>客户类型</p>"
          },
          {
            "group": "Parameter",
            "type": "decimal(string)",
            "optional": false,
            "field": "money",
            "description": "<p>调整金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reason",
            "description": "<p>调整原因</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"customId\": \"string\",\n   \"customType\": \"BIG_CUSTOM\",\n   \"changeType\": \"ADD\",\n   \"money\": 0,\n   \"reason\": \"string\"\n}",
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
            "description": "<p>返回数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.cashPoolId",
            "description": "<p>资金池标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.changeType",
            "description": "<p>调整类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.checkId",
            "description": "<p>审核标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>资金池调整申请标识</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.money",
            "description": "<p>调整金额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reason",
            "description": "<p>调整原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.statusDate",
            "description": "<p>状态变更时间</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-25T09:55:25.571+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"cashPoolId\": \"5c404c7a23b4eb2f844e5d44\",\n     \"changeType\": \"ADD\",\n     \"money\": 110,\n     \"statusDate\": null,\n     \"status\": \"PENDING_CHECK\",\n     \"reason\": \"与U9不符合\",\n     \"checkId\": null,\n     \"id\": \"5c4add0dbbe4875218cc8c04\",\n     \"createDate\": 1548410125436,\n     \"createMan\": \"-1\"\n   }\n }",
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
            "field": "20112006",
            "description": "<p>添加资金调整申请失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112007",
            "description": "<p>客户或经销商信息为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112008",
            "description": "<p>调整类型为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112009",
            "description": "<p>调整金额为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112010",
            "description": "<p>调整原因为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112011",
            "description": "<p>查询资金池失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112012",
            "description": "<p>大客户/经销商只能有一个资金池</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/CashPoolRestController.java",
    "groupTitle": "CashPoolRestController",
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
    "url": "/v1/xlink-order-rest/cashPool/getCashPoolAdjustRequestInfo/{id}",
    "title": "获取资金池调整申请记录",
    "name": "getCashPoolAdjustRequestInfo",
    "group": "CashPoolRestController",
    "description": "<p>获取资金池调整申请记录</p>",
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
            "description": "<p>资金池调整申请标识</p>"
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
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.changeType",
            "description": "<p>调整类型</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.createDate",
            "description": "<p>申请日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.checkId",
            "description": "<p>审核标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createMan",
            "description": "<p>申请人</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createManName",
            "description": "<p>申请人名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customType",
            "description": "<p>客户类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>资金池调整申请标识</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reason",
            "description": "<p>申请原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-23T07:10:06.651+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"id\": \"5c480edebbe48705c4bd32d8\",\n     \"customName\": \"依赖大客户、经销商\",\n     \"customId\": null,\n     \"customType\": null,\n     \"changeType\": \"ADD\",\n     \"money\": 1000,\n     \"createMan\": \"1207d2b61cde9000\",\n     \"createManName\": \"xuqian\",\n     \"createDate\": 1548226270667,\n     \"status\": \"PENDING_CHECK\",\n     \"reason\": \"1111\",\n     \"checkId\": \"11111\"\n   }\n}",
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
            "description": "<p>资金池调整记录标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111003",
            "description": "<p>获取资金池详情失败</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/CashPoolRestController.java",
    "groupTitle": "CashPoolRestController",
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
    "url": "/v1/xlink-order-rest/cashPool/listCashPoolAdjustRequests",
    "title": "分页查询资金池调整申请",
    "name": "listCashPoolAdjustRequests",
    "group": "CashPoolRestController",
    "description": "<p>分页查询资金池调整申请</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序数组</p>"
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
            "field": "query.changeType",
            "description": "<p>调整类型</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateEnd",
            "description": "<p>申请时间结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.createDateStart",
            "description": "<p>申请时间起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryFieldName",
            "description": "<p>分页查询字段名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.queryValue",
            "description": "<p>分页查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.status",
            "description": "<p>状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\",\n       \"additionalProp2\": \"asc\",\n     }\n   ],\n   \"query\": {\n     \"queryFieldName\": \"string\",\n     \"queryValue\": \"string\",\n     \"changeType\": \"ADD\",\n     \"createDateStart\": 0,\n     \"createDateEnd\": 0,\n     \"status\": \"PENDING_CHECK\"\n   }\n }",
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
            "description": "<p>返回数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.changeType",
            "description": "<p>调整类型</p>"
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
            "field": "data.list.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customType",
            "description": "<p>客户类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>资金池调整申请标识</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.money",
            "description": "<p>金额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-23T06:58:57.631+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"id\": \"5c480edebbe48705c4bd32d8\",\n         \"customName\": \"依赖大客户、经销商\",\n         \"customId\": null,\n         \"customType\": null,\n         \"changeType\": \"ADD\",\n         \"money\": 1000,\n         \"createMan\": \"1207d2b61cde9000\",\n         \"createManName\": \"xuqian\",\n         \"createDate\": 1548226270667,\n         \"status\": \"PENDING_CHECK\"\n       }\n     ],\n     \"count\": 1\n   }\n}",
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
            "field": "20112003",
            "description": "<p>资金调整申请分页查询条件为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112004",
            "description": "<p>查询客户列表失败</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112005",
            "description": "<p>分页查询资金池体调整失败</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/CashPoolRestController.java",
    "groupTitle": "CashPoolRestController",
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
    "url": "/v1/xlink-order-rest/cashPool/listCashPoolChangeRecords",
    "title": "分页查询资金池变更记录",
    "name": "listCashPoolChangeRecords",
    "group": "CashPoolRestController",
    "description": "<p>分页查询资金池变更记录</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序数组</p>"
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
            "field": "query.cashPoolId",
            "description": "<p>资金池标识</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.changeDateEnd",
            "description": "<p>变更时间结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "query.changeDateStart",
            "description": "<p>变更时间起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.changeOrigin",
            "description": "<p>变更来源</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query.changeType",
            "description": "<p>变更类型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\",\n       \"additionalProp2\": \"asc\",\n     }\n   ],\n   \"query\": {\n     \"changeDateStart\": 0,\n     \"changeDateEnd\": 0,\n     \"changeType\": \"ADD\",\n     \"changeOrigin\": \"SYSTEM_BILL\",\n     \"cashPoolId\": \"string\"\n   }\n}",
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
            "description": "<p>返回数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.balance",
            "description": "<p>变更后余额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.cashPoolId",
            "description": "<p>资金池标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.changeDate",
            "description": "<p>变更时间</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.changeMoney",
            "description": "<p>变更金额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.changeOrigin",
            "description": "<p>变更来源</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.changeType",
            "description": "<p>变更类型</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-23T08:34:48.066+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"cashPoolId\": \"5c404c7a23b4eb2f844e5d44\",\n         \"balance\": 110,\n         \"changeOrigin\": \"SYSTEM_BILL\",\n         \"changeMoney\": 110,\n         \"changeType\": \"ADD\",\n         \"changeDate\": 1110\n       }\n     ],\n     \"count\": 1\n   }\n }",
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
            "field": "20111002",
            "description": "<p>资金池标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20113001",
            "description": "<p>获取资金池变更记录列表失败</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/CashPoolRestController.java",
    "groupTitle": "CashPoolRestController",
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
    "url": "/v1/xlink-order-rest/cashPool/listCashPools",
    "title": "分页查询资金池记录",
    "name": "listCashPools",
    "group": "CashPoolRestController",
    "description": "<p>分页查询资金池记录</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序数组</p>"
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
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>分页查询字段名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>分页查询字段值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"query\": {\n   \"queryFieldName\": \"string\",\n   \"queryValue\": \"string\"\n   }\n}",
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
            "description": "<p>返回数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.amount",
            "description": "<p>资金池余额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customType",
            "description": "<p>客户类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.id",
            "description": "<p>资金池记录标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.updateDate",
            "description": "<p>最后更新时间</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-23T07:43:15.558+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"id\": \"5c40425723b4eb0f081cedf9\",\n         \"customName\": \"依赖经销商大客户\",\n         \"customId\": \"string\",\n         \"customType\": \"BIG_CUSTOM\",\n         \"amount\": 0,\n         \"updateDate\": 0\n       },\n       {\n         \"id\": \"5c40456323b4eb2f844e5d38\",\n         \"customName\": \"依赖经销商大客户\",\n         \"customId\": \"string\",\n         \"customType\": \"BIG_CUSTOM\",\n         \"amount\": 0,\n         \"updateDate\": 0\n       }\n     ],\n     \"count\": 14\n   }\n}",
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
            "field": "20111004",
            "description": "<p>资金池记录分页查询条件为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20111001",
            "description": "<p>获取资金池列表失败</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/CashPoolRestController.java",
    "groupTitle": "CashPoolRestController",
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
    "url": "/v1/xlink-order-rest/cashPool/updateCashPoolAdjustRequest/{id}",
    "title": "修改资金池调整申请状态",
    "name": "updateCashPoolAdjustRequest",
    "group": "CashPoolRestController",
    "description": "<p>修改资金池调整申请状态</p>",
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
            "description": "<p>资金池调整申请标识</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"id\":\"1111111\"\n}",
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
            "description": "<p>返回数据对象</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.cashPoolId",
            "description": "<p>资金池标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.changeType",
            "description": "<p>调整类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.checkId",
            "description": "<p>审核标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>资金池调整申请标识</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.money",
            "description": "<p>调整金额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.reason",
            "description": "<p>调整原因</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.statusDate",
            "description": "<p>状态变更时间</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.updateDate",
            "description": "<p>更新日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.updateMan",
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
          "content": "HTTP/1.1 200 OK\n{\n   \"responseTime\": \"2019-01-25T10:40:16.017+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"cashPoolId\": \"5c404c7a23b4eb2f844e5d44\",\n     \"changeType\": \"ADD\",\n     \"money\": 110,\n     \"statusDate\": 1548412815138,\n     \"status\": \"CLOSED\",\n     \"reason\": \"与U9不符合\",\n     \"checkId\": null,\n     \"id\": \"5c4add0dbbe4875218cc8c04\",\n     \"updateDate\": 1548412815944,\n     \"updateMan\": \"-1\",\n   }\n}",
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
            "description": "<p>资金池调整记录标识为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20112013",
            "description": "<p>修改资金调整申请状态失败</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/CashPoolRestController.java",
    "groupTitle": "CashPoolRestController",
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
    "type": "DELETE",
    "url": "/v1/xlink-order-rest/marketCenterManager/deleteMarketCenter/{id}",
    "title": "删除营销中心",
    "name": "deleteMarketCenter",
    "group": "MarketCenterManagerController",
    "description": "<p>删除营销中心</p>",
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
          "content": "HTTP/1.1 200 OK \n{\n  \"responseTime\": \"2019-01-15T07:15:27.320+0000\",\n  \"code\": \"000000\",\n  \"status\": \"200\",\n  \"msg\": \"请求成功\",\n  \"data\": null\n}",
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
            "field": "20110003",
            "description": "<p>marketcenter id is empty</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110011",
            "description": "<p>fail to marketcenter delete</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20110012",
            "description": "<p>id association cannot be deleted</p>"
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
            "type": "string",
            "optional": false,
            "field": "data.code",
            "description": "<p>营销中心编号</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.contactNumber",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.name",
            "description": "<p>营销中心名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.responsibleMan",
            "description": "<p>负责人</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.updateDate",
            "description": "<p>更新日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.updateMan",
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
          "content": "HTTP/1.1 200 OK\n{\n\t  \"responseTime\": \"2019-01-03T08:29:29.448+0000\",\n\t  \"code\": \"000000\",\n\t  \"status\": \"200\",\n\t  \"msg\": \"请求成功\",\n\t  \"data\": {\n\t      \"name\": \"张三\",\n\t      \"code\": \"云智易01\",\n\t      \"responsibleMan\": \"李四\",\n\t      \"contactNumber\": \"18273418265\",\n\t      \"id\": \"5c2dbf046f729b63c032aa67\",\n\t      \"createDate\": 1546501892048,\n\t      \"createMan\": \"-1\",\n\t      \"updateDate\": null,\n\t      \"updateMan\": null\n\t  }\n\t}",
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
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>查询字段名称 marketCenterName/createManName</p>"
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
            "field": "data.list.id",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.name",
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
          "content": "HTTP/1.1 200 OK\n{\n   \"responseTime\": \"2019-01-10T09:20:30.193+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"id\": \"111222000000000000000000\",\n         \"name\": \"张三\",\n         \"createDate\": 1546680210313,\n         \"createMan\": \"1207d2b5aa9f0200\",\n         \"createManName\": \"hyhtest\"\n       }\n     ],\n     \"count\": 1,\n     \"current_page\": 0,\n     \"per_page\": 10\n   }\n }",
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
            "optional": true,
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
            "optional": true,
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
            "optional": true,
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
            "optional": true,
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
          "content": "HTTP/1.1 200 OK \n* {\n  \"code\": \"string\",\n  \"data\": {\n    \"count\": 0,\n    \"list\": [\n      {\n        \"cellPhone\": \"string\",\n        \"createDate\": 0,\n        \"email\": \"string\",\n        \"id\": \"string\",\n        \"marketCenterId\": \"string\",\n        \"personName\": \"string\",\n        \"personId\": \"string\"\n      }\n    ],\n  },\n  \"msg\": \"string\",\n  \"responseTime\": \"2019-01-08T11:54:17.221Z\",\n  \"status\": \"string\"\n}",
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
            "type": "string",
            "optional": false,
            "field": "marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": true,
            "field": "personIds",
            "description": "<p>人员标识数组</p>"
          },
          {
            "group": "Parameter",
            "type": "array(string)",
            "optional": true,
            "field": "positionIds",
            "description": "<p>岗位标识数组</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"marketCenterId\": \"string\",\n  \"personIds\": [\n    \"string\"\n  ],\n  \"positionIds\": [\n    \"string\"\n  ]\n}",
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
            "type": "array(object)",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.cellPhone",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.id",
            "description": "<p>关联标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.marketCenterId",
            "description": "<p>营销中心标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.personId",
            "description": "<p>人员标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.personName",
            "description": "<p>人员姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.email",
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-11T02:36:39.726+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": [\n       {\n         \"marketCenterId\": \"qwert\",\n         \"personId\": \"zsw21qe2w\",\n         \"personName\": \"张三\",\n         \"cellPhone\": \"13443216543\",\n         \"email\":\"1564324513@qq.com\",\n         \"id\": \"5c380137e5039337e4d30f5e\",\n         \"createDate\": 1547174199657,\n         \"createMan\": \"-1\"\n       },\n       {\n         \"marketCenterId\": \"11hy6tfs\",\n         \"personId\": \"qwertyuip\",\n         \"personName\": \"李四\",\n         \"cellPhone\": \"13443216543\",\n         \"email\":\"987654565@qq.com\",\n         \"id\": \"5c380137e5039337e4d30f5f\",\n         \"createDate\": 1547174199657,\n         \"createMan\": \"-1\"\n       }\n   ]\n}",
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
  },
  {
    "type": "GET",
    "url": "/v1/xlink-order-rest/orderAccountPeriod/findOrderAccoundPeriodDetailsById/{id}",
    "title": "查询账期详情",
    "name": "findOrderAccoundPeriodDetailsById",
    "group": "OrderAccountPeriodRestController",
    "description": "<p>查询账期详情</p>",
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
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.accountPeriodId",
            "description": "<p>账期编号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.amount",
            "description": "<p>账期总额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customId",
            "description": "<p>customId 客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.customType",
            "description": "<p>客户类型</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.endDate",
            "description": "<p>账期结束日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.name",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.orderAccountDetailDtos",
            "description": "<p>回款明细列表</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.orderAccountDetailDtos.acceptMoney",
            "description": "<p>已回款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.orderAccountDetailDtos.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderAccountDetailDtos.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderAccountDetailDtos.id",
            "description": "<p>回款明细标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderAccountDetailDtos.orderAccountId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.orderAccountDetailDtos.payDate",
            "description": "<p>回款日期</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.orderAccountDetailDtos.payMoney",
            "description": "<p>账期金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.orderAccountDetailDtos.payNode",
            "description": "<p>回款节点</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.orderAccountDetailDtos.payRadio",
            "description": "<p>回款比例</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.orderAccountDetailDtos.periodOrder",
            "description": "<p>期数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderAccountDetailDtos.status",
            "description": "<p>订单账期明细状态</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.orderAccountDetailDtos.statusDate",
            "description": "<p>转台更新时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.orderId",
            "description": "<p>订单标识</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.payRadio",
            "description": "<p>已回款比例</p>"
          },
          {
            "group": "Success 200",
            "type": "array(object)",
            "optional": false,
            "field": "data.payRecords",
            "description": "<p>回款记录列表</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.payRecords.createDate",
            "description": "<p>创建日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.payRecords.createMan",
            "description": "<p>创建者标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.payRecords.id",
            "description": "<p>回款记录标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.payRecords.orderAccountDetailId",
            "description": "<p>回款明细标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.payRecords.orderAccountId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.payRecords.payDate",
            "description": "<p>回款时间</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.payRecords.payMoney",
            "description": "<p>回款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.period",
            "description": "<p>账期期限</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.receivedMoney",
            "description": "<p>已回款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.remainMoney",
            "description": "<p>剩余回款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.startDate",
            "description": "<p>账期起始日期</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.status",
            "description": "<p>订单账期状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-23T02:41:01.278+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"accountPeriodId\": \"1323432\",\n     \"name\": \"账期名称\",\n     \"period\": 1,\n     \"amount\": 10.36,\n     \"receivedMoney\": 0.36,\n     \"payRadio\": 0.03,\n     \"remainMoney\": 10,\n     \"status\": \"RUNNING\",\n     \"orderId\": \"5c3efe99a17e7019de0bc507\",\n     \"customName\": null,\n     \"customId\": null,\n     \"customType\": null,\n     \"startDate\": 1548864000000,\n     \"endDate\": 1551283200000,\n     \"orderAccountDetailDtos\": [\n       {\n        \"orderAccountId\": \"5c443f7223b4eb159013b21e\",\n         \"periodOrder\": 0,\n         \"payDate\": 0,\n         \"payNode\": 0,\n         \"payRadio\": 55.5,\n         \"payMoney\": 0,\n         \"acceptMoney\": 0,\n         \"status\": \"FINISHED\",\n         \"statusDate\": null,\n         \"id\": \"5c443fd723b4eb159013b21f\",\n         \"createDate\": 1547976663728,\n         \"createMan\": \"-1\"\n       }\n     \"payRecords\": [\n       {\n         \"payMoney\": 18232111221,\n         \"payDate\": 186727346211,\n         \"orderAccountId\": \"5c443f7223b4eb159013b21e\",\n         \"orderAccountDetailId\": \"5c443fd723b4eb159013b21f\",\n         \"createDate\": 1548214235714,\n         \"createMan\": \"-1\"\n       }\n     ]\n   }\n }",
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
            "field": "20104004",
            "description": "<p>id不能为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20104005",
            "description": "<p>获取账期明细列表失败</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/OrderAccountPeriodRestController.java",
    "groupTitle": "OrderAccountPeriodRestController",
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
    "url": "/v1/xlink-order-rest/orderAccountPeriod/listOrderAccountDetails",
    "title": "分页查询回款管理",
    "name": "listOrderAccountDetails",
    "group": "OrderAccountPeriodRestController",
    "description": "<p>分页查询回款管理</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "query",
            "description": "<p>分页查询参数</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.payDateEnd",
            "description": "<p>回款时间结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.payDateStart",
            "description": "<p>回款时间起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>分页查询字段名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>分页查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.status",
            "description": "<p>订单账期明细状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\",\n       \"additionalProp2\": \"asc\"\n     }\n   ],\n   \"query\": {\n     \"queryFieldName\": \"string\",\n     \"queryValue\": \"string\",\n     \"status\": \"NOT_START\",\n     \"payDateStart\": 0,\n     \"payDateEnd\": 0\n   }\n}",
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
            "description": "<p>数据对象集合</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.acceptMoney",
            "description": "<p>回款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customId",
            "description": "<p>客户标识</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customType",
            "description": "<p>客户类型</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.name",
            "description": "<p>账期方式</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderAccountId",
            "description": "<p>账期标识</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.payDate",
            "description": "<p>回款日期</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.payRadio",
            "description": "<p>回款比例</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "data.list.periodOrder",
            "description": "<p>期数</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>订单账期明细状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-23T03:39:47.918+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"orderAccountId\": \"5c443f7223b4eb159013b21e\",\n         \"acceptMoney\": 0,\n         \"payRadio\": 55.5,\n         \"periodOrder\": 0,\n         \"payDate\": 0,\n         \"name\": \"账期名称\",\n         \"customId\": null,\n         \"customType\": null,\n         \"customName\": null,\n         \"status\": \"FINISHED\"\n       }\n     ],\n     \"count\": 3,\n     \"per_page\": 10\n   }\n}",
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
            "field": "20105002",
            "description": "<p>回款管理分页查询条件为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20105003",
            "description": "<p>获取回款管理列表失败</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/OrderAccountPeriodRestController.java",
    "groupTitle": "OrderAccountPeriodRestController",
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
    "url": "/v1/xlink-order-rest/orderAccountPeriod/listOrderAccountPeriods",
    "title": "分页查询账期管理",
    "name": "listOrderAccountPeriods",
    "group": "OrderAccountPeriodRestController",
    "description": "<p>分页查询账期管理</p>",
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
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>页大小</p>"
          },
          {
            "group": "Parameter",
            "type": "array(object)",
            "optional": true,
            "field": "sort",
            "description": "<p>排序对象</p>"
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
            "optional": true,
            "field": "query.queryFieldName",
            "description": "<p>分页查询字段名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.queryValue",
            "description": "<p>分页查询字段值</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.startDateEnd",
            "description": "<p>账期时间结束点</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": true,
            "field": "query.startDateStart",
            "description": "<p>账期时间起始点</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "query.status",
            "description": "<p>订单账期状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"page\": 1,\n   \"size\": 10,\n   \"sort\": [\n     {\n       \"additionalProp1\": \"desc\",\n       \"additionalProp2\": \"asc\"\n     }\n   ],\n   \"query\": {\n     \"queryFieldName\": \"string\",\n     \"queryValue\": \"string\",\n     \"status\": \"RUNNING\",\n     \"startDateStart\": 0,\n     \"startDateEnd\": 0\n   }\n}",
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
            "description": "<p>数据集合</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.accountPeriodId",
            "description": "<p>账期编号</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.amount",
            "description": "<p>账期总额</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.customName",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.name",
            "description": "<p>账期名称</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.orderId",
            "description": "<p>来源订单</p>"
          },
          {
            "group": "Success 200",
            "type": "decimal(string)",
            "optional": false,
            "field": "data.list.payRadio",
            "description": "<p>已回款比例</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "data.list.startDate",
            "description": "<p>账期时间</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.list.status",
            "description": "<p>订单账期状态</p>"
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
          "content": "HTTP/1.1 200 OK \n{\n   \"responseTime\": \"2019-01-23T02:31:28.561+0000\",\n   \"code\": \"000000\",\n   \"status\": \"200\",\n   \"msg\": \"请求成功\",\n   \"data\": {\n     \"list\": [\n       {\n         \"accountPeriodId\": \"1323432\",\n         \"name\": \"账期名称\",\n         \"amount\": 10.36,\n         \"payRadio\": 0.03,\n         \"orderId\": \"5c3efe99a17e7019de0bc507\",\n         \"customName\": null,\n         \"status\": \"RUNNING\",\n         \"startDate\": 1548864000000\n       }\n     ],\n     \"count\": 1,\n     \"per_page\": 10\n   }\n }",
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
            "field": "20104002",
            "description": "<p>账期管理分页查询条件为空</p>"
          },
          {
            "group": "errorCode",
            "type": "string",
            "optional": false,
            "field": "20104003",
            "description": "<p>账期管理分页查询失败</p>"
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
    "filename": "src/main/java/cn/xlink/cloud/order/rest/controller/OrderAccountPeriodRestController.java",
    "groupTitle": "OrderAccountPeriodRestController",
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
