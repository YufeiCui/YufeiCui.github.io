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
<tr>
  <td rowspan="2" class="lecture-week">{{ forloop.index }}</td>
  <td>{{ week.a.desc.csc }}</td>
  <td>{{ week.a.desc.mat }}</td>
  <td rowspan="2" class="lecture-exercise">
    <ul>
      {% for ex in week.ex %}
      <li>{{ ex }}</li>
      {% endfor %}
    </ul>
  </td>
</tr>
<tr>
  <td>{{ week.b.desc.csc }}</td>
  <td>{{ week.b.desc.mat }}</td>
</tr>
{% endfor %}
</table>

<!-- [resume]({{site.data.locations.resume}}) -->
