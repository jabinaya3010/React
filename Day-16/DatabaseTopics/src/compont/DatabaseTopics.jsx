import React from "react";

function DatabaseTopics() {
  return (
    <div>
      <h1>Database Concepts</h1>

      <div>
        <h2>RDBMS</h2>
        <p>
          <strong>Full Form:</strong> Relational Database Management System
        </p>
        <p>
          Stores and manages data in related tables. Examples: MySQL,
          PostgreSQL, Oracle.
        </p>
      </div>

      <div>
        <h2>SQL</h2>
        <p>
          <strong>Full Form:</strong> Structured Query Language
        </p>
        <p>
          SQL is used to create, retrieve, update, and delete data from a
          database.
        </p>
      </div>

      <div>
        <h2>MySQL</h2>
        <p>
          MySQL is an open-source Relational Database Management System (RDBMS)
          used to store application data.
        </p>
      </div>

      <div>
        <h2>MySQLi</h2>
        <p>
          MySQLi (MySQL Improved) is a PHP extension used to connect PHP
          applications with MySQL. It is not used in React applications.
        </p>
      </div>

      <div>
        <h2>PostgreSQL (PG)</h2>
        <p>
          PostgreSQL is an advanced open-source relational database known for
          its performance and reliability.
        </p>
      </div>

      <div>
        <h2>Oracle</h2>
        <p>
          Oracle is an enterprise-level relational database widely used in
          banking, healthcare, and government sectors.
        </p>
      </div>

      <div>
        <h2>Server</h2>
        <p>
          A server receives requests from clients, processes them, communicates
          with the database, and sends responses.
        </p>
      </div>

      <div>
        <h2>XAMPP</h2>
        <p>
          XAMPP is a local server package that includes Apache, MySQL, PHP, and
          Perl for PHP development.
        </p>
      </div>

      <div>
        <h2>WAMP</h2>
        <p>
          WAMP is a Windows-based local server package that includes Apache,
          MySQL, and PHP.
        </p>
      </div>

      <div>
        <h2>GUI</h2>
        <p>
          GUI (Graphical User Interface) allows users to interact with software
          using buttons, windows, icons, and menus.
        </p>
      </div>

      <div>
        <h2>MySQL Workbench 8</h2>
        <p>
          MySQL Workbench is a graphical tool used to create databases, tables,
          execute SQL queries, and manage MySQL servers.
        </p>
      </div>
    </div>
  );
}

export default DatabaseTopics;