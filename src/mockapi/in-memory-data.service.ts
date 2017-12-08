import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const features = [
            { id: 11, "created": "7/23/2016 12:05 AM", "enabled": 0, "icon": "thumb_up", "modified": "7/23/2016 12:05 AM", "title": "Workflows Manager", "user": "Carl Davidson" },
            { id: 12, "created": "8/23/2016 12:07 AM", "enabled": 0, "icon": "autorenew", "modified": "8/23/2016 12:07 AM", "title": "Workflows Availability", "user": "Elizabeth Guerrero" },
            { id: 13, "created": "8/23/2016 12:07 AM", "enabled": 0, "icon": "message", "modified": "8/23/2016 12:07 AM", "title": "Server Monitor", "user": "Danielle Guerrero" },
            { id: 14, "created": "8/23/2016 12:09 AM", "enabled": 0, "icon": "autorenew", "modified": "8/23/2016 12:09 AM", "title": "Services Status", "user": "Carl Burke" },
            { id: 15, "created": "8/17/2016 12:05 AM", "enabled": 1, "icon": "thumb_up", "modified": "8/17/2016 12:05 AM", "title": "Ingest Monitor", "user": "Edward Stephens" },
            { id: 16, "created": "8/17/2016 12:05 AM", "enabled": 0, "icon": "account_circle", "modified": "8/17/2016 12:05 AM", "title": "Orchestration Monitor", "user": "Beverly Guerrero" },
            { id: 17, "created": "7/23/2016 12:05 AM", "enabled": 0, "icon": "message", "modified": "7/23/2016 12:05 AM", "title": "Availability Manager", "user": "Elizabeth Stephens" },
            { id: 18, "created": "8/23/2016 12:09 AM", "enabled": 0, "icon": "account_balance_wallet", "modified": "8/23/2016 12:09 AM", "title": "Server Availability", "user": "Aaron Obrien" },
            { id: 19, "created": "7/23/2016 12:05 AM", "enabled": 0, "icon": "autorenew", "modified": "7/23/2016 12:05 AM", "title": "Alerts Availability", "user": "Elizabeth Payne" },
            { id: 10, "created": "7/23/2016 12:05 AM", "enabled": 1, "icon": "message", "modified": "7/23/2016 12:05 AM", "title": "Orchestration Status", "user": "Carl Hopkins" },
            { id: 9, "created": "7/23/2016 12:05 AM", "enabled": 0, "icon": "account_circle", "modified": "7/23/2016 12:05 AM", "title": "Movement Availability", "user": "Danielle Park" },
            { id: 8, "created": "8/23/2016 12:09 AM", "enabled": 0, "icon": "thumb_up", "modified": "8/23/2016 12:09 AM", "title": "Orchestration Status", "user": "Alice Guerrero" }
        ];
        const users = [
            {
                "displayName": "Suzy Cuningham",
                id: 11,
                "email": "suzy.cuningham@gmail.com",
                "created": "10/01/2015 11:05 AM",
                "lastAccess": "12/23/2015 11:05 AM",
                "siteAdmin": true
            },
            {
                "displayName": "Bobby Daniels",
                id: 12,
                "email": "bobbyD@outlook.com",
                "created": "10/01/2015 11:05 AM",
                "lastAccess": "12/23/2015 11:05 AM",
                "siteAdmin": false
            },
            {
                "displayName": "John Walker",
                id: 13,
                "email": "johnnyWalker@blue.com",
                "created": "10/01/2015 11:05 AM",
                "lastAccess": "12/23/2015 11:05 AM",
                "siteAdmin": false
            },
            {
                "displayName": "Eddy Stevens",
                id: 14,
                "email": "eStevens@yahoo.com",
                "created": "10/01/2015 11:05 AM",
                "lastAccess": "12/23/2015 11:05 AM",
                "siteAdmin": false
            },
            {
                "displayName": "Jan Williams",
                id: 15,
                "email": "jDubz@msn.com",
                "created": "10/01/2015 11:05 AM",
                "lastAccess": "12/23/2015 11:05 AM",
                "siteAdmin": false
            }
        ]
            ;
        const items2 =
            [
                {
                    id: 1,

                    "name": "Suzy Cuningham",
                    "description": "updated her account",
                    "icon": "account_circle",
                    "created": "07/13/2016 11:05 AM"
                },
                {
                    id: 2,
                    "name": "Bobby Daniels",
                    "description": "made a deposit of $25.15",
                    "icon": "account_balance_wallet",
                    "created": "07/01/2016 03:41 PM"
                },
                {
                    id: 3,
                    "name": "John Walker",
                    "description": "changed refresh settings on their account",
                    "icon": "autorenew",
                    "created": "06/15/2016 09:02 AM"
                },
                {
                    id: 4,
                    "name": "Eddy Stevens",
                    "description": "liked the latest announcements",
                    "icon": "thumb_up",
                    "created": "03/23/2016 11:01 PM"
                },
                {
                    id: 5,
                    "name": "Jan Williams",
                    "description": "sent a personal message to a user",
                    "icon": "message",
                    "created": "12/23/2015 11:05 AM"
                }

            ];
        const alerts2 = [
            {
                id: 1,
                "name": "Sim Card",
                "description": "sim card expiring",
                "icon": "sim_card",
                "created": "07/13/2016 11:05 AM"
            }, {
                id: 2,
                "name": "Motherboard",
                "description": "board heat nearing critical",
                "icon": "developer_board",
                "created": "07/01/2016 03:41 PM"
            }, {
                id: 3,
                "name": "RAM Usage",
                "description": "exceeded ram capacity",
                "icon": "memory",
                "created": "06/15/2016 09:02 AM"
            }, {
                id: 4,
                "name": "Wireless Signal",
                "description": "interrupted signal strength",
                "icon": "router",
                "created": "03/23/2016 11:01 PM"
            }, {
                id: 5,
                "name": "Battery",
                "description": "battery level unknown",
                "icon": "battery_unknown",
                "created": "12/23/2015 11:05 AM"
            }
        ];
        const products = [
            {
                id: 11,
                "name": "Analyze This",
                "description": "product description",
                "icon": "account_balance",
                "color": "pink-A200",
                "category": "analytics"
            }, {
                id: 12,
                "name": "Android Usage",
                "description": "product description",
                "icon": "android",
                "color": "green-700",
                "category": "analytics"
            }, {
                id: 13,
                "name": "Watch Usage",
                "description": "product description",
                "icon": "watch",
                "color": "purple-600",
                "category": "analytics"
            }, {
                id: 14,
                "name": "Customer Sentiment",
                "description": "product description",
                "icon": "face",
                "color": "light-blue-600",
                "category": "customers"
            }, {
                id: 15,
                "name": "Member Retention",
                "description": "product description",
                "icon": "card_membership",
                "color": "orange-700",
                "category": "customers"
            }, {
                id: 16,
                "name": "Rewards Usage",
                "description": "product description",
                "icon": "card_giftcard",
                "color": "indigo-600",
                "category": "customers"
            }
        ];
        return { users, items2, alerts2, features, products };
    }
}

