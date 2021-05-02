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
</tr>
</thead>
{% for week in site.data.lectures %}
<tr>
    <td rowspan="2">{{ forloop.index }}</td>
    <td>{{ week.a.desc.csc }}</td>
    <td>{{ week.a.desc.mat }}</td>
</tr>
<tr>
    <td>{{ week.b.desc.csc }}</td>
    <td>{{ week.b.desc.mat }}</td>
</tr>
{% endfor %}
</table>

<!-- [resume]({{site.data.locations.resume}}) -->
