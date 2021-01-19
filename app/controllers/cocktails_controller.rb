class CocktailsController < ApplicationController
    def index
        @cocktails = Cocktail.all
    end

    def show
        @cocktail = Cocktail.find(params[:id])
        puts "**********************************"
        p @cocktail

        puts "**********************************"
    end

    def edit
        @cocktail = Cocktail.find(params[:id])
        @ingredients = Ingredient.all
        @dose = Dose.new
        @ingredient = Ingredient.new
    end
    def update

    end

    def new
        @cocktail = Cocktail.new
    end

    def create
        @cocktail = Cocktail.new(cocktail_params)
        puts "#################################3333#{@cocktail.valid?}"
        if @cocktail.save
            redirect_to root_path
        else
            render :new
        end

    end

    private
    def cocktail_params
        params.require(:cocktail).permit(:name, :photo)
    end


end
