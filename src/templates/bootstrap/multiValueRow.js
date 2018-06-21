export default {
  form: `
<tr ref="row">
  <td>
    {{element}}
  </td>
  {% if (!disabled) { %}
  <td>
    <button type="button" class="btn btn-default btn-secondary" ref="removeRow">
      <i class="glyphicon glyphicon-remove-circle"></i>
    </button>
  </td>
  {% } %}
</tr>
`,
};