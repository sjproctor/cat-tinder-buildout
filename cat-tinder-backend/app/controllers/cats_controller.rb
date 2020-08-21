class CatsController < ApplicationController
  def index
    cats = Cat.all
    render json: cats
  end

  def create
    cat = Cat.create(cat_params)
    if cat.valid?
      render json: cat
     else
      render json: cat.errors, status: :unprocessable_entity
      # This can also be written as:
      # render json: cat.errors, status: 422
     end
  end

  def destroy
    cat = Cat.find(params[:id])
    if cat.destroy
      render json: cat
    else
      render json: cat.errors, status: :unprocessable_entity
    end
  end

  def update
    # Update a new cat
    cat = Cat.find(params[:id])
    cat.update(cat_params)
    if cat.valid?
      render json: cat
    else
      render json: cat.errors, status: :unprocessable_entity
    end
  end

  private
  # Handle strong parameters, so we are secure
  def cat_params
    params.require(:cat).permit(:name, :age, :enjoys)
  end
end
