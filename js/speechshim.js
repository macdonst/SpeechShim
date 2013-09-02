if (!window.SpeechRecognition && window.webkitSpeechRecognition) {
    window.SpeechRecognition = window.webkitSpeechRecognition;
}

if (!window.SpeechRecognitionError && window.webkitSpeechRecognitionError) {
    window.SpeechRecognitionError = window.webkitSpeechRecognitionError;
}

if (!window.SpeechRecognitionEvent && window.webkitSpeechRecognitionEvent) {
    window.SpeechRecognitionEvent = window.webkitSpeechRecognitionEvent;
}

if (!window.SpeechGrammar && window.webkitSpeechGrammar) {
    window.SpeechGrammar = window.webkitSpeechGrammar;
}

if (!window.SpeechGrammarList && window.webkitSpeechGrammarList) {
    window.SpeechGrammarList = window.webkitSpeechGrammarList;
    SpeechGrammarList.prototype.addFromURI = window.SpeechGrammarList.prototype.addFromUri;
}

document.addEventListener("DOMContentLoaded", function() {
	if (!window.speechSynthesis) {
		var audioDiv = document.createElement("div");
		audioDiv.id = "audio";
		document.body.appendChild(audioDiv);

		var SpeechSynthesis = function() {
			this.pending = false;
			this.speaking = false;
			this.paused = false;
		};

		SpeechSynthesis.prototype.speak = function(utterance) {
			var options = {};
			if (utterance.volume) {
				options.amplitude = utterance.volume;
			}
			if (options.pitch) {
				options.pitch = utterance.pitch;
			} 
			if (options.speech) {
				options.speech = utterance.rate * 100;
			} 
			if (options.voice) {
				options.voice = utterance.lang;
			} 
			speak(utterance.text, options);
		};

		SpeechSynthesis.prototype.pause = function(utterance) {
			console.log("Not implemented");
		};

		SpeechSynthesis.prototype.cancel = function(utterance) {
			console.log("Not implemented");
		};

		SpeechSynthesis.prototype.resume = function(utterance) {
			console.log("Not implemented");
		};

		SpeechSynthesis.prototype.getVoices = function(utterance) {
			var voice = new SpeechSynthesisVoice();
			voice.name = "English";
			voice.lang = "en";
			var list = new SpeechSynthesisVoiceList();
			list.items.push(voice);
			list.length = 1;
			return list;
		};

		window.speechSynthesis = new SpeechSynthesis();
	}

	if (!window.SpeechSynthesisUtterance) {
		var SpeechSynthesisUtterance = function() {
			this.text = "";
			this.lang = "en-US";
			this.voiceURI = "";
			this.volume = 100;
			this.rate = 1.0;
			this.pitch = 50;
		};
		window.SpeechSynthesisUtterance = SpeechSynthesisUtterance;
	}

	if (!window.SpeechSynthesisEvent) {
		var SpeechSynthesisEvent = function() {
			this.charIndex = 0;
			this.elapsedTime = 0;
			this.name = "";
		};
		window.SpeechSynthesisEvent = SpeechSynthesisEvent;
	}

	if (!window.SpeechSynthesisVoice) {
		var SpeechSynthesisVoice = function() {
			this.voiceURI = "";
			this.name = "";
			this.lang = "";
			this.localService = true;
			this.default = false;
		};
		window.SpeechSynthesisVoice = SpeechSynthesisVoice;
	}

	if (!window.SpeechSynthesisVoiceList) {
		var SpeechSynthesisVoiceList = function() {
			this.length = 0;
			this.items = [];
		};

		SpeechSynthesisVoiceList.prototype.item = function(index) {
			return this.items[index];
		};

		window.SpeechSynthesisVoiceList = SpeechSynthesisVoiceList;

	}
});