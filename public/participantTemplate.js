(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['addNewParticipant'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n<tr>\n\n    <th scope=\"row\">"
    + alias4(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first","hash":{},"data":data}) : helper)))
    + "</th>\n\n    <td>"
    + alias4(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias4(((helper = (helper = helpers.school || (depth0 != null ? depth0.school : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"school","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias4(((helper = (helper = helpers.major || (depth0 != null ? depth0.major : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"major","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias4(((helper = (helper = helpers.bday || (depth0 != null ? depth0.bday : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bday","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias4(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gender","hash":{},"data":data}) : helper)))
    + "</td>\n    <td>"
    + alias4(((helper = (helper = helpers.ethnicity || (depth0 != null ? depth0.ethnicity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ethnicity","hash":{},"data":data}) : helper)))
    + "</td>\n\n</tr>";
},"useData":true});
})();