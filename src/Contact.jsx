import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import Navbar from "./Navbar";
import "./Travel.css";

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.user = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(user) {
    let node = this.root;
    for (let char of user.name.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    node.user = user;
  }
  search(prefix) {
    let node = this.root;
    for (let char of prefix.toLowerCase()) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    return this.collectUsers(node);
  }
  collectUsers(node, users = []) {
    if (node.isEndOfWord) users.push(node.user);
    for (let child in node.children) {
      this.collectUsers(node.children[child], users);
    }
    return users;
  }
}

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const trieRef = useRef(new Trie());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        data.forEach(user => trieRef.current.insert(user));
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredUsers(value === "" ? users : trieRef.current.search(value));
  };

  return (
    <div className="page-container">
      <Navbar />
      <h1 className="page-title">Contact Us</h1>
      <p className="page-content">Here is the list of our users:</p>
      
      <input
        type="text"
        placeholder="Search Users..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="user-list">
        <h2>Users List</h2>
        <div className="user-cards">
          {filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Website:</strong> {user.website}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
              <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
