<template>
    <nav>
            <v-toolbar-side-icon @click="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-toolbar-side-icon>

            <v-toolbar-title class="text-uppcase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>shit</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>


            <!-- drop down menu -->
            <!-- <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Dropdown
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu> -->

            <!-- <div class="text-center">
                    <v-menu offset-x>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark v-bind="attrs" v-on="on">

                                <v-icon left>mdi-arrow-expand-down</v-icon>
                                Dropdown
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
                                <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div> -->


            <v-btn flat color="grey">
                <span>Sign out</span>
                <v-icon right>
                    mdi-exit-to-app
                </v-icon>
            </v-btn>

        <v-navigation-drawer app v-model="drawer" class="primary">
            <!-- <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <br> <br>
                        <v-icon class="white--text"> {{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                            {{ link.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list> -->
            
            <v-card class="mx-auto" width="300">
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    <v-list-group :value="true" prepend-icon="mdi-account-circle">
                        <template v-slot:activator>
                            <v-list-item-title>Users</v-list-item-title>
                        </template>
                        <v-list-group :value="true" no-action sub-group>
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>Admin</v-list-item-title>
                                </v-list-item-content>
                            </template>
                                <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
                                <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>
                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                                <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-group>

                        <v-list-group no-action sub-group>
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>Actions</v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
                                <v-list-item-title v-text="title"></v-list-item-title>

                                <v-list-item-icon>
                                    <v-icon v-text="icon"></v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-group>
                    </v-list-group>
                </v-list>
            </v-card>

            <!-- <v-card class="mx-auto" max-width="350">
                <v-list flat>
                    <v-list-item-group v-model="model" color="indigo">
                        <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
                            <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title v-text="item.text"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>


                <div class="text-center">
                    <v-menu offset-x>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                <v-icon left>mdi-arrow-expand-down</v-icon>
                                Dropdown
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-card> -->


        </v-navigation-drawer>



    </nav>
</template>

<script>

export default {

    data() {
        return {
            drawer: false,
            // links: [
            //     { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
            //     { icon: 'mdi-folder', text: 'Folder', route: '/projects' },
            //     { icon: 'mdi-account-group-outline', text: 'Teams', route: '/team' },
            // ]

            // admins: [
            //     ['Management', 'mdi-account-multiple-outline' ],
            //     ['Settings', 'mdi-cog-outline' ],
            // ],
            cruds: [
                ['Create', 'mdi-plus-outline'   ],
                ['Read', 'mdi-file-outline'],
                ['Update', 'mdi-update'],
                ['Delete', 'mdi-delete'],
            ],
            items: [
                {
                    icon: 'mdi-view-dashboard',
                    text: 'Dashboard', route: '/management'
                },
                {
                    icon: 'mdi-card-bulleted-settings-outline',
                    text: 'settings',
                    route: '/settings'
                },
                {
                    icon: 'mdi-bluetooth-audio',
                    text: 'Bluetooth', route: '/create'
                },
                {
                    icon: 'mdi-auto-fix',
                    text: 'Sample', route: '/Sample'
                },
            ],

        }
    }
}
</script>