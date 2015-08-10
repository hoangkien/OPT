require "opentok"
module OP
  class << self
    def opentok
      @opentok ||= OpenTok::OpenTok.new OP_CONFIG['API_KEY'], OP_CONFIG['SECRET']
    end
  end
end
