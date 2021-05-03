---
layout: page
title: Learning
permalink: /learning/
---
<table>
<thead>
<tr>
  <th>Week</th>
  <th>Programming</th>
  <th>Math</th>
  <th>Exercise</th>
</tr>
</thead>
{% for week in site.data.lectures %}

<!-- Set the variables to nil here to erase previous iteration -->
{% assign csc_a = nil %}
{% assign mat_a = nil %}
{% assign csc_b = nil %}
{% assign mat_b = nil %}

<!-- Get the file with the corresponding name from lectures.yml -->
{% if week.a.link.csc %}
  {% assign csc_a = site.static_files | where: 'name', week.a.link.csc | first %} 
{% endif %}

{% if week.a.link.mat %}
  {% assign mat_a = site.static_files | where: 'name', week.a.link.mat | first %} 
{% endif %}

{% if week.b.link.csc %}
  {% assign csc_b = site.static_files | where: 'name', week.b.link.csc | first %}
{% endif %}

{% if week.b.link.mat %}
  {% assign mat_b = site.static_files | where: 'name', week.b.link.mat | first %} 
{% endif %}

<tr>
  <td rowspan="2" class="lecture-week">{{ forloop.index }}</td>
  <!-- Render with link if exists, otherwise regular text  -->
  {% if csc_a %}
    <td><a href="{{ csc_a.path }}">{{ week.a.desc.csc }}</a></td>
  {% else %} 
    <td>{{ week.a.desc.csc }}</td>
  {% endif %}

  {% if mat_a %}
    <td><a href="{{ mat_a.path }}">{{ week.a.desc.mat }}</a></td>
  {% else %} 
    <td>{{ week.a.desc.mat }}</td>
  {% endif %}
  <td rowspan="2" class="lecture-exercise">
    <ul>
      {% for ex in week.ex %}
      <li>{{ ex }}</li>
      {% endfor %}
    </ul>
  </td>
  <td>
  {% assign tests = site.static_files | where: 'name', week.a.link.csc %} 
  <ul>
  {% for test in tests %}
    <li>{{test.name}} VS. {{week.a.link.csc}}</li>
  {% endfor %}
  </ul>
  </td>
</tr>
<tr>
  {% if csc_b %}
    <td><a href="{{ csc_b.path }}">{{ week.b.desc.csc }}</a></td>
  {% else %} 
    <td>{{ week.b.desc.csc }}</td>
  {% endif %}

  {% if mat_b %}
    <td><a href="{{ mat_b.path }}">{{ week.b.desc.mat }}</a></td>
  {% else %} 
    <td>{{ week.b.desc.mat }}</td>
  {% endif %}
</tr>
{% endfor %}
</table>