<script>
	$(document).ready(function () {
		var left = 1000;
		var textarea = '#commentArea';
		var textCounter = "#commentCounter";
		var buttonName = "#commentPost";
		textCounters(textarea, textCounter, buttonName, left);
	});
</script>
<script type="text/javascript">
	$(function () {
		$('.infinite-loading-comments').jscroll({
			autoTrigger: true,
			nextSelector: '.pagination li.active + li a',
			contentSelector: 'div.infinite-loading-comments',
			loadingHtml: '<div class="col-lg-8"><img class="loading-image" src="{{ URL::asset('assets/img/ajax-loader.svg')}}" alt="Loading"/></div>',
			callback: function () {
				$('ul.pagination:visible:first').hide();
			}
		});
	});
</script>
<script>
	$(document).ready(function () {
		$(".comment-emoji-area").textcomplete([{
			match: /\B:([\-+\w]*)$/,
			search: function (term, callback) {
				var results = [];
				var results2 = [];
				var results3 = [];
				$.each(emojiStrategy, function (shortname, data) {
					if (shortname.indexOf(term) > -1) {
						results.push(shortname);
					} else {
						if ((data.aliases !== null) && (data.aliases.indexOf(term) > -1)) {
							results2.push(shortname);
						} else if ((data.keywords !== null) && (data.keywords.indexOf(term) > -1)) {
							results3.push(shortname);
						}
					}
				});
				if (term.length >= 3) {
					results.sort(function (a, b) {
						return (a.length > b.length);
					});
					results2.sort(function (a, b) {
						return (a.length > b.length);
					});
					results3.sort();
				}
				var newResults = results.concat(results2).concat(results3);
				callback(newResults);
			},
			template: function (shortname) {
				return '<img class="emojione" src="//cdn.jsdelivr.net/emojione/assets/png/' + emojiStrategy[shortname].unicode + '.png"> :' + shortname + ':';
			},
			replace: function (shortname) {
				return ':' + shortname + ': ';
			},
			index: 1,
			maxCount: 10
		}], {
			footer: '<a href="http://www.emoji.codes" target="_blank">Browse All<span class="arrow">»</span></a>'
		});
	});
</script>
{{--Ajax Request for the like button--}}
@include('templates.partials.ajax_requests')
