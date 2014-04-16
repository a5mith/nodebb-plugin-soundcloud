(function(module) {
	"use strict";

	var SoundCloud = {},
		embed = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/$1&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true"></iframe>';


	SoundCloud.parse = function(postContent, callback) {
		// modified from http://stackoverflow.com/questions/7168987/
		postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:soundcloud\.com)\/?(.+)">.+<\/a>/g, embed);
		callback(null, postContent);
	};

	module.exports = SoundCloud;
}(module));

                <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/29817339&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true"></iframe>