import React from 'react'
export default function Navbar() {
  return (
      <nav class="navbar navbar-light bg-primary justify-content-between">
    <a class="navbar-brand">Cart</a>
    <form class="d-flex">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
  )
}
