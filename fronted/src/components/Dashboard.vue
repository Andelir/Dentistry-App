<template>
  <div class="about">
   <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
     
  <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/" style="font-weight:bold;">DENTISTRY</a>
 
 <!--  sidebar-brand-text mx-3 -->
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <a class="nav-link px-3" href="#">Sign out</a>
    </div>
  </div>
</header>

<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
                <span class="material-icons feather">home</span>
                Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/add">
             <span class="material-icons feather">
                add
                </span>
              Add appointment
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/search">
              <span class="material-icons feather">
                search
                </span>
              Search appointment
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/calendar">
              <span class="material-icons feather">
                event
                </span>
              Calendar
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="material-icons feather">
                settings
                </span>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>

 
    </main>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  /* props: {
    msg: String
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->
