<template>
  <nav>
    <Dropdown title="Forms" :items="services" />
  </nav>
</template>
  
  <script>
import Dropdown from "./Dropdown";

export default {
  name: "navbar",
  components: {
    Dropdown,
  },
  data() {
    return {
      services: [
        {
          title: "Application Form",
          link: "./Popup",
        },
        {
          title: "Applicants List",
          link: "#",
        },
        {
          title: "Videos",
          link: "#",
        },
      ],
    };
  },
};
</script>
  
  <style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #ff5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>