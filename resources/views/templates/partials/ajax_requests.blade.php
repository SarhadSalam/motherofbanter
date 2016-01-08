{{--Ajax Request for the like button--}}
<script>
	$(document).ready(function () {
		$('.form{{$images->id}}').on('submit', function (event) {
			event.preventDefault();

			$.ajax({
				type: "get",
				url: '{{ route('image.like', ['imageId' => $images->id]) }}',
				success: function () {
					if ($('.form{{$images->id}} .icon-thumbs-o-up').hasClass('unused-icon')) {
						$('.form{{$images->id}} .icon-thumbs-o-up').removeClass('unused-icon');
						var like_counter = $(".like_count{{$images->id}}").html() * 1 + 1;
						$('.like_count{{$images->id}}').text(like_counter);
					} else {
						$('.form{{$images->id}} .icon-thumbs-o-up').addClass('unused-icon');
						var unlike_counter = $(".like_count{{$images->id}}").html() * 1 - 1;
						$('.like_count{{$images->id}}').text(unlike_counter);
					}
					if (!$('.form_dislike{{$images->id}} .icon-thumbs-o-down').hasClass('unused-icon')) {
						$('.form_dislike{{$images->id}} .icon-thumbs-o-down').addClass('unused-icon');
						var dislike_counter = $(".dislike_count{{$images->id}}").html() * 1 - 1;
						$('.dislike_count{{$images->id}}').text(dislike_counter);
					}
				}
			});
		});
	});
</script>
{{--Ajax Request for the dislike button--}}
<script>
	$(document).ready(function () {
		$('.form_dislike{{$images->id}}').on('submit', function (event) {
			event.preventDefault();

			$.ajax({
				type: "get",
				url: '{{ route('image.dislike', ['imageId' => $images->id]) }}',
				success: function () {
					if ($('.form_dislike{{$images->id}} .icon-thumbs-o-down').hasClass('unused-icon')) {
						$('.form_dislike{{$images->id}} .icon-thumbs-o-down').removeClass('unused-icon');
						var dislike_counter = $(".dislike_count{{$images->id}}").html() * 1 + 1;
						$('.dislike_count{{$images->id}}').text(dislike_counter);
					} else {
						$('.form_dislike{{$images->id}} .icon-thumbs-o-down').addClass('unused-icon');
						var undislike_counter = $(".dislike_count{{$images->id}}").html() * 1 - 1;
						$('.dislike_count{{$images->id}}').text(undislike_counter);
					}
					if (!$('.form{{$images->id}} .icon-thumbs-o-up').hasClass('unused-icon')) {
						$('.form{{$images->id}} .icon-thumbs-o-up').addClass('unused-icon');
						var unlike_counter = $(".like_count{{$images->id}}").html() * 1 - 1;
						$('.like_count{{$images->id}}').text(unlike_counter);
					}
				}
			});
		});
	});
</script>
