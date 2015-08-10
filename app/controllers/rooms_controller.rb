class RoomsController < ApplicationController
  def index
    @rooms = Room.all
  end

  def new
    @room = Room.new
  end

  def create

    session = OP.opentok.create_session(:media_mode => :routed) # auto record :archive_mode => :always
    session_id = session.session_id
    _room_params = room_params.merge!(:sessionId => session_id)
    @room = Room.new(_room_params)
    if @room.save
      redirect_to rooms_index_path, notice: "Create Room successful!"
    else
      render :new

    end

  end

  def start
  end

  def stop
  end

  def join_room
    @sessionId = params[:sessionId]
  end

  private
  def room_params
    params.require(:room).permit(:name)
  end

end
